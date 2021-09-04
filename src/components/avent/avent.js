import React from 'react';
import styled from 'styled-components';
import AvailList from '../avail/avail.list';

const Avent = ({ avent, clicked, next, showNext, prev, showPrev }) => {
    const [aventName, setAventName] = React.useState('');
    const [aventOwner, setAventOwner] = React.useState('');
    const [aventGroup, setAventGroup] = React.useState('');
    const [aventUsers, setAventUsers] = React.useState([]);
    const [aventNote, setAventNote] = React.useState('');

    React.useEffect(() => {
        if (avent) {
            setAventName(avent.name);
            setAventOwner(`${avent.owner.firstName} ${avent.owner.lastName}`);
            setAventGroup(avent.group);
            setAventUsers(avent.users);
            setAventNote(avent.note);
        }
    }, [avent]);

    console.log(avent);

    return (
        <AventWrapper>
            <Header>
                <h4>{aventName}</h4>
                <h5>{aventGroup.name}</h5>
                <h5>{aventOwner}</h5>
                <h5>{aventNote}</h5>
            </Header>

            <select>
                <option value=''>Users</option>
                {aventUsers && aventUsers.map((au, idx) => {
                    return <option key={idx} value={au._id}>{`${au.firstName} ${au.lastName}`}</option>
                })}
            </select>

            {avent.avails.length > 0 && <AvailList avails={avent.avails} />}

            {showNext && <NextButton onClick={() => next()}>Next</NextButton>}
            {showPrev && <PrevButton onClick={() => prev()}>Prev</PrevButton>}
        </AventWrapper>
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

const AventWrapper = styled.div`
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
    border: 1px solid green;
`;

export default Avent;