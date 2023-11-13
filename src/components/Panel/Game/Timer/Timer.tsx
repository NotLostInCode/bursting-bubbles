import React from 'react';
import {useTimer} from "../../../../hooks/useTimer";

export const Timer = () => {
    const {
        seconds,
        milliseconds,
        gettingSeconds
    } = useTimer()

    return (
        <div>{gettingSeconds(seconds)}:{gettingSeconds(milliseconds)}</div>
    )
}
