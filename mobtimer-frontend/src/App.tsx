import React, { useState } from 'react';
import JoinMobForm from './components/JoinMobForm';
import JoinMobHeading from './components/JoinMobHeading';
import { MobSocketClient, Status } from 'mobtimer-api';
import { waitForSocketState } from 'mobtimer-api';
import './App.css';
import ActionButton from './components/ActionButton';
import { MobTimerResponses } from 'mobtimer-api';

const App = () => {
  const [mobName, setMobName] = useState('');
  const [label, setLabel] = useState('Start2');
  let client: MobSocketClient;
  // todo: unhardcode port
  const port = 4000;
  const url = `ws://localhost:${port}`;

  const submitJoinMobRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    // Join mob
    client = await MobSocketClient.openSocket(url);
    client.webSocket.onmessage = (message) => {
      // todo: replace logging with actual changes in UI
      const response = JSON.parse(message.data) as MobTimerResponses.SuccessfulResponse;
      if (response.mobState.status === Status.Running) {
        setLabel("Pause");
      };
    };
    await waitForSocketState(client.webSocket, WebSocket.OPEN);
    client.joinMob(mobName);
  }

  const submitAction = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    client.start();
  }


  return (
    <div>
      <JoinMobHeading />
      <JoinMobForm mobName={mobName} setMobName={setMobName} submitJoinMobRequest={submitJoinMobRequest} />
      <ActionButton label={label} submitAction={submitAction} />
    </div>
  );
};

export default App;