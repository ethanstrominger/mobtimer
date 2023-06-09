import { TimeUtils } from 'mobtimer-api';
import React, { useEffect, useState } from 'react';
import { Controller } from '../controller';
import { frontendMobTimer } from '../timers';

type FormParameters = {
    timeString: string;
}

const Timer = ({ timeString }: FormParameters) => {

    function onTick() {
        Controller.setTimeString(frontendMobTimer.secondsRemainingString);
        document.title = `${frontendMobTimer.secondsRemainingString} - ${Controller.getAppTitle()}`;
    }

    useEffect(() => {
        // Continuously re-sync the interval to match the frontendMobTimer so that we display whole
        // seconds as accurately as possible in the UI. Otherwise, it can be choppy (off by 1 to 999 ms)
        const fractionalSeconds = frontendMobTimer.secondsRemaining % 1;
        const millisecondsUntilNextWholeSecond = TimeUtils.secondsToMilliseconds(fractionalSeconds);
        let millisecondsBetweenTicks =
            (millisecondsUntilNextWholeSecond > 1 && millisecondsUntilNextWholeSecond < 1000) ?
                millisecondsUntilNextWholeSecond :
                1000;

        //console.log("--- millisecondsBetweenTicks : " + millisecondsBetweenTicks + " ---");

        //Component mounted
        let interval = setInterval(() => { onTick(); }, millisecondsBetweenTicks);

        //Component will unmount
        return () => { clearInterval(interval) };

    }, [timeString]);

    return (
        <p className='Time'>{timeString}</p>
    );

}

export default Timer;
export { frontendMobTimer };
