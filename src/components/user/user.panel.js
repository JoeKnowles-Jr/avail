import React from 'react';
import AventInput from '../avent/avent.input';
import styled from 'styled-components';

const UserPanel = ({ user, close }) => {
    const [showCreateAvent, setShowCreateAvent] = React.useState(null);
    const [selectedAvent, setSelectedAvent] = React.useState({});
    const [groupAvents, setGroupAvents] = React.useState([]);

    React.useEffect(() => {
        if (selectedAvent === 'Create Avent') {
            setShowCreateAvent(true);
        } else {

        }
    }, [selectedAvent]);

    React.useEffect(() => {
        if (selectedGroup) {
            if (selectedGroup.avents && selectedGroup.avents.length > 0) {
                setGroupAvents(selectedGroup.avents);
            } else {
                setGroupAvents([]);
            }
        }
    }, [selectedGroup]);

    return (
        <UserPanelWrapper>
            {selectedGroup && <AventSelect>
                <span>Avents: </span>
                <button title='Create Group' className="circle plus" onClick={() => setShowCreateAvent(true)}></button>
                <select title='Select Avent' value={selectedAvent} onChange={(e) => setSelectedAvent(e.target.value)}>
                    <option>{(selectedGroup && selectedGroup.avents) ? selectedGroup.avents.length : 0} Avents</option>
                    <option>Create Avent</option>
                    {groupAvents.length > 0 && groupAvents.map(a => { return <option value={a._id}>{a.name}</option> })}
                </select>
            </AventSelect>}
            {showCreateAvent && <AventInput user={user} group={selectedGroup} cancel={() => setShowCreateAvent(false)} />}
            <Close onClick={close}>x</Close>
        </UserPanelWrapper>
    );
};

const AventSelect = styled.div`
    width: 100%;
    margin: 0 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    span {
        font-size: 1.5rem;
    }
    select {
        width: 65%;
        padding: 0.25rem;
    }
`;

const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
`;

const UserPanelWrapper = styled.div`
    padding: 2rem;
    position: relative;
`;

export default UserPanel;