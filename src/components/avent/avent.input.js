import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { insertAvent } from '../../actions/avent.actions';

const AventInput = ({ user, group, cancel }) => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [note, setNote] = React.useState('');
    // const [invites, setInvites] = React.useState([]);

    const handleSave = () => {
        console.log("owner", user._id)
        const avent = {
            name: name,
            description: description,
            note: note,
            owner: user._id,
            group: group._id
        }
        dispatch(insertAvent(avent));
    };

    return (
        <AventInputWrapper>
            <Header>
                <h4>New Avent for {group && <span>{group.name}</span>}</h4>
            </Header>
            Avent Name
            <input name='name' value={name} onChange={(e) => setName(e.target.value)} type='text' />
            <textarea onChange={(e) => setDescription(e.target.value)} placeholder='Description...'></textarea>
            <textarea onChange={(e) => setNote(e.target.value)} placeholder='Note...'></textarea>
            <button>Invite Users</button>
            <Buttons>
                <button onClick={() => cancel()}>Cancel</button>
                <button onClick={() => handleSave()}>Save</button>
            </Buttons>
        </AventInputWrapper>
    );
};

const Header = styled.div`
    margin: 0 auto;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
`;

const AventInputWrapper = styled.div`
    background-color: #aaa;
    color: black;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    textarea {
        margin-top: 1rem;
    }
`;

export default AventInput;