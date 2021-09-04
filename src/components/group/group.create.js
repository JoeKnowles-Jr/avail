import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { insertGroup } from '../../actions/group.actions';

const GroupCreate = ({ uid, cancel }) => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [note, setNote] = React.useState('');
    const [restricted, setRestricted] = React.useState(true);
    // const [invites, setInvites] = React.useState([]);

    const handleSave = () => {
        const group = {
            name,
            note,
            restricted,
            // invites,
            owner: uid
        };
        dispatch(insertGroup(group));
        cancel();
    };

    return (
        <GroupInputWrapper>
            <Header>
                <h4>New Group</h4>
            </Header>
            Group Name
            <input name='name' value={name} onChange={(e) => setName(e.target.value)} type='text' />
            <textarea onChange={(e) => setNote(e.target.value)} value={restricted} placeholder='Add note...'></textarea>
            <Actions>
                <button>Invite Users</button>
                <RB onChange={(e) => setRestricted(e.target.value === 'restricted')}>
                    <input type="radio" value="restricted" name="restricted" defaultChecked={restricted} />Restricted
                    <input type="radio" value="unrestricted" name="restricted" />UnRestricted
                </RB>
            </Actions>
            <Buttons>
                <button onClick={() => cancel()}>Cancel</button>
                <button onClick={() => handleSave()}>Save</button>
            </Buttons>
        </GroupInputWrapper>
    );
};

const Header = styled.div`
    margin: 0 auto;
`;

const RB = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
`;

const GroupInputWrapper = styled.div`
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

export default GroupCreate;