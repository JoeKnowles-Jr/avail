import React from 'react';
import styled from 'styled-components';
import manage from '../../img/page_white_gear.png';

const Group = ({ isOwner, group, createAvent, inviteUsers }) => {
    const [groupName, setGroupName] = React.useState('');
    const [groupOwner, setGroupOwner] = React.useState('');
    const [groupUsers, setGroupUsers] = React.useState([]);
    const [groupAvents, setGroupAvents] = React.useState([]);
    const [groupNote, setGroupNote] = React.useState('');

    React.useEffect(() => {
        setGroupName(group.name || '');
        setGroupOwner(`${group.owner && group.owner.firstName ? group.owner.firstName : ''} ${group.owner && group.owner.lastName ? group.owner.lastName : ''}`);
        setGroupUsers(group.users || null);
        setGroupAvents(group.avents || null);
        setGroupNote(group.note || '');
    }, [group]);

    return (
        <GroupWrapper>
            <Header>
                <p className='group-name'>{groupName}</p>
                <span className={`group-owner ${isOwner ? 'owner' : ''}`}>{groupOwner}</span>
                <p>
                    {group && <select>
                        <option key='0' value='default'>{group.avents ? group.avents.length : 0} Avents</option>
                        {groupAvents && groupAvents.map((a, idx) => {
                            return <option key={idx} value={a._id}>{a.name}</option>
                        })}
                    </select>}
                    {isOwner && <button onClick={createAvent} title='Create Avent' className="manage" ><img alt='manage' src={manage} /></button>}

                </p>
                <p>
                    {group && <select>
                        {groupUsers && groupUsers.length > 0 && groupUsers.map((u, idx) => {
                            return <option key={idx} value={u._id}>{`${u.firstName} ${u.lastName}`}</option>
                        })}
                        <option key='999' value=''>{group.users ? group.users.length : 0} Users</option>
                    </select>}
                    {isOwner && <button onClick={inviteUsers} title='Add User' className="manage" ><img alt='manage' src={manage} /></button>}
                </p>
                <p>
                    <textarea disabled value={groupNote}></textarea>
                </p>
            </Header>

        </GroupWrapper>
    );
};

const Header = styled.div`
    margin: 1rem auto;
    select {
        width: 75%;
    }
    .group-name {
        font-size: 2rem;
    }
    .group-owner {

    }
    .owner {
        color: green;
    }
    .manage {
        border-radius: 50%;
    }
`;

const GroupWrapper = styled.div`
    background-color: #aaa;
    position: relative;
    color: black;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    textarea {
        margin-top: 1rem;
        resize: none;
    }
`;

export default Group;