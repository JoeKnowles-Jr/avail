import React from 'react';

const SECONDS = 1000;
const MINUTES = 60000;
const HOURS = 3600000;

const WorkTimer = ({ fromNow, untilTime }) => {
    console.log(fromNow);
    console.log(untilTime);

    const interpretFrom = (inputTime) => {
        const measure = inputTime.substring(0, inputTime.length - 1);
        console.log(measure);
        if (inputTime.endsWith('h')) {
            return measure * HOURS;
        }
        if (inputTime.endsWith('m')) {
            return measure * MINUTES;
        }
        if (inputTime.endsWith('s')) {
            return measure * SECONDS;
        }
    };

    const interpretUntil = (inputTime) => {

    };

    const soundAlarm = () => {
        throw new Error("Time's Up!");
    }

    React.useEffect(() => {
        if (fromNow) {
            console.log('from');
            const interval = (fromNow);
            console.log(interval);
            setTimeout(soundAlarm, interpretFrom(fromNow) || 2000);
        }
        if (untilTime) {
            console.log('until');
            setTimeout(soundAlarm, interpretUntil(untilTime) || 2000);
        }
    }, [fromNow, untilTime]);


    return (<div>Timer On</div>);
};

export default WorkTimer;







