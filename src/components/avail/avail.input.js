import React from 'react';
import styled from 'styled-components';
import { insertAvail } from '../../actions'

const AvailInput = ({ uid, date, cancel }) => {
    const [fromTime, setFromTime] = React.useState('');
    const [toTime, setToTime] = React.useState('');
    const [note, setNote] = React.useState('');

    const handleSave = () => {
        console.log({
            user: uid,
            date,
            start: fromTime,
            end: toTime,
            note
        });
        insertAvail({ user: uid, date, start: fromTime, end: toTime, note });
    };

    return (
        <AvailInputWrapper>
            from
            <input name='fromTime' value={fromTime} onChange={(e) => setFromTime(e.target.value)} type='time' />
            to
            <input name='toTime' value={toTime} onChange={(e) => setToTime(e.target.value)} type='time' />
            {fromTime && <p>fromTime - {fromTime}</p>}
            <textarea onChange={(e) => setNote(e.target.value)} placeholder='Add note...'></textarea>
            <Buttons>
                <button onClick={() => cancel()}>Cancel</button>
                <button onClick={() => handleSave()}>Save</button>
            </Buttons>
        </AvailInputWrapper>
    );
};

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
`;

const AvailInputWrapper = styled.div`
    background-color: #aaa;
    color: black;
    width: 15rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    textarea {
        margin-top: 1rem;
    }
`;

export default AvailInput;