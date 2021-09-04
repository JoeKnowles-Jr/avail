import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import GroupCreate from '../group/group.create';
import GroupJoin from '../group/group.join';
import GroupSelect from './group.select';
import { clearGroupMessage } from '../../actions/group.actions';
import joinIcon from '../../img/join_group_icon.png';
import '../../css/circle.plus.css';

const GroupPanel = ({ user, userGroups, allGroups, groupMessage, selectGroup }) => {
    const dispatch = useDispatch();
    const [showCreateGroup, setShowCreateGroup] = React.useState(null);
    const [showJoinGroup, setShowJoinGroup] = React.useState(null);

    const backFromJoin = (group) => {
        setShowJoinGroup(false);
        selectGroup(group);
        setTimeout(() => {
            dispatch(clearGroupMessage());
        }, 5000);
    };

    const backFromCreate = () => {
        setShowCreateGroup(false);
        setTimeout(() => {
            dispatch(clearGroupMessage());
        }, 5000);
    };

    return (
        <GroupPanelWrapper>
            {!showJoinGroup && !showCreateGroup &&
                <div>
                    <Default>
                    <span>My Groups: </span>
                    <div>

                        <button title='Create Group' className="circle plus" onClick={() => setShowCreateGroup(true)}></button>
                        <button onClick={() => setShowJoinGroup(true)} className='join'><img width='32' src={joinIcon} title='Join Group' alt="join group" /></button>
                    </div>

                    </Default>
                    {userGroups && userGroups.length > 0 && <GroupSelect groups={userGroups} selectGroup={selectGroup} />}
                </div>
            }
            {showJoinGroup && <GroupJoin groups={allGroups} uid={user._id} cancel={(group) => backFromJoin(group)} />}
            {showCreateGroup && <GroupCreate uid={user._id} cancel={() => backFromCreate()} />}
            {groupMessage && <GroupMsg>{groupMessage}</GroupMsg>}
        </GroupPanelWrapper>
    );
};

const Default = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
`;

const GroupMsg = styled.div`
    color: red;
`;

const GroupPanelWrapper = styled.div`
    width: 100%;
    margin: 0 0 1rem;
    padding: 1rem;
    span {
        font-size: 1.5rem;
    }
    select {
        width: 65%;
        padding: 0.25rem;
    }
    .join {
        width: 36px;
        padding: 0;
        border-radius: 50%;
    }
    .circle.minus:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:red;
        margin: auto 2px;
        height: 2px;
    }

    .circle-button {
        border-radius: 50%;
    }
`;

export default GroupPanel;
