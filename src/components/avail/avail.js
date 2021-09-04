import React from 'react';
import styled from 'styled-components';

const Avail = ({ avail, clicked, next, showNext, prev, showPrev }) => {
    const [displayDate, setDisplayDate] = React.useState(avail.date);
    const [fromTime, setFromTime] = React.useState('');
    const [toTime, setToTime] = React.useState('');
    const [note, setNote] = React.useState('');

    React.useEffect(() => {
        if (avail) {
            setDisplayDate(avail.date);
            setFromTime(avail.start);
            setToTime(avail.end);
            setNote(avail.note);
        }
    }, [avail]);

    console.log(avail);
    console.log(displayDate);

    return (
        <AvailWrapper>
            <Header>
                {displayDate && <h4>{displayDate.toDateString()}</h4>}
            </Header>
            from
            <input name='fromTime' value={fromTime} disabled type='time' />
            to
            <input name='toTime' value={toTime} disabled type='time' />
            <textarea value={note} disabled></textarea>
            {showNext && <NextButton onClick={() => next()}>Next</NextButton>}
            {showPrev && <PrevButton onClick={() => prev()}>Prev</PrevButton>}
        </AvailWrapper>
    );
};

const NextButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 0;
`;

const PrevButton = styled.button`
    position: absolute;
    top: 5px;
    left: 5px;
    padding: 0;
`;

const Header = styled.div`
    margin: 1rem auto;
`;

const AvailWrapper = styled.div`
    background-color: #aaa;
    position: relative;
    color: black;
    width: 15rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    textarea {
        margin-top: 1rem;
        resize: none;
    }
`;

export default Avail;