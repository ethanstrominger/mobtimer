import React, { useState } from 'react';
import { client } from '../timers';

type FormParameters = {
    participants: string[];
}

const Participants = ({ participants }: FormParameters) => {
    const [participantName, setParticipantName] = useState('');

    const roles = "Navigator,Driver";
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedName = participantName.trim();
        if (trimmedName.length > 0) { // todo also check for duplicates, i.e.,  && !participants.includes(trimmedName))
            client.addParticipant(trimmedName);
        }            
        setParticipantName('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <label>Participants ({roles}): </label>
            <label>{participants.join(",")}</label>
            {/* <ul>
                {participants.map(o => <li key={o}>{o}</li>)}
            </ul> */}
        </form>
    )
}

export default Participants