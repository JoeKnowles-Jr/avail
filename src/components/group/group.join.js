import React from 'react';
import { useDispatch } from 'react-redux';
import GroupSelect from './group.select';
import Group from './group';
import styled from 'styled-components';
import { joinGroup, requestJoinGroup } from '../../actions/group.actions';

const GroupJoin = ({ uid, groups, cancel }) => {
    const dispatch = useDispatch();
    const [selectedGroup, setSelectedGroup] = React.useState(null);
    const [restrictedGroup, setRestrictedGroup] = React.useState(null);
    const [requestSent, setRequestSent] = React.useState(false);

    React.useEffect(() => {
        if (requestSent) {
            cancel();
        }
    }, [requestSent]);

    React.useEffect(() => {
        if (selectedGroup) {
            setRestrictedGroup(selectedGroup.restricted);
        }
    }, [selectedGroup]);

    const handleSelect = (g) => {
        setSelectedGroup(JSON.parse(g));
    };

    const handleJoinRequest = () => {
        dispatch(requestJoinGroup(uid, selectedGroup._id));
        setRequestSent(true);
        cancel();
    };

    const handleJoin = () => {
        dispatch(joinGroup(uid, selectedGroup._id));
        cancel(JSON.stringify(selectedGroup));
    };

    return (
        <div>
            <h2>Join Group</h2>
            <GroupSelect selectGroup={handleSelect} groups={groups} cancel={cancel}></GroupSelect>
            {selectedGroup && restrictedGroup &&
                <RestrictedWrapper>
                <p className='red'>This group is restricted.</p>
                <p>Would you like to send a join request?</p>
                <button onClick={handleJoinRequest}>Send Request</button>
                </RestrictedWrapper>
            }
            {selectedGroup && !restrictedGroup &&
                <UnrestrictedWrapper>
                <Group group={selectedGroup} />
                <button onClick={handleJoin}>Join This Group</button>
                </UnrestrictedWrapper>
            }
            <button onClick={() => cancel()}>Cancel</button>
        </div>
    );
}

const UnrestrictedWrapper = styled.div`

`;

const RestrictedWrapper = styled.div`
    p {
        font-size: 1rem;
    }
    .red {
        color: red;
    }
`;

export default GroupJoin;
