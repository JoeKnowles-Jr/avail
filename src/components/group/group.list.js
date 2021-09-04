import React from 'react';
import styled from 'styled-components';
import Group from './group';
// import GroupPanel from './group.panel';
import AventPanel from '../avent/avent.panel';

const GroupList = ({ user, userGroups }) => {

    const [groupIndex, setGroupIndex] = React.useState(0);
    const [group, setGroup] = React.useState([]);
    const [showNext, setShowNext] = React.useState(false);
    const [showPrev, setShowPrev] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState('groups');
    const [isOwner, setIsOwner] = React.useState(false);

    React.useEffect(() => {
        if (userGroups) {
            setGroup(userGroups[groupIndex]);
            setShowPrev(groupIndex > 0);
            setShowNext(groupIndex < userGroups.length - 1);
        }
    }, [groupIndex]);

    React.useEffect(() => {
        group.owner && user && setIsOwner(group.owner === user._id);
    }, [group]);

    // const close = () => {
    //     setShowPanel('groups')
    // };

    const createAvent = () => {
        setShowPanel('createAvent')
    };

    const inviteUsers = () => {
        setShowPanel('inviteUsers')
    };

    React.useEffect(() => {
        if (user && userGroups) {
            setGroup(userGroups[0]);
            setGroupIndex(0);
            setShowNext(userGroups && userGroups.length > 1);
        }
    }, [user, userGroups]);

    const next = () => {
        const nextGroup = groupIndex + 1;
        if (nextGroup > userGroups.length - 1) {
            setShowNext(false);
            return;
        }
        setGroupIndex(nextGroup);
    };

    const prev = () => {
        const nextGroup = groupIndex - 1;
        if (nextGroup < 0) {
            setShowPrev(false);
            return;
        }
        setGroupIndex(nextGroup);
    }

    const renderGroup = () => {
        return (
            <div>
                {group && <Group
                    isOwner={isOwner}
                    group={group}
                    createAvent={createAvent}
                    inviteUsers={inviteUsers}
                />}
            </div>
        );
    };

    return (
        <ListWrapper>
            {/* {showPanel === 'groups' && <GroupPanel userGroups={userGroups} selectGroup={(e) => handleChange(e && e.target.value)} user={user} />} */}
            {showPanel === 'createAvent' && <AventPanel close={() => setShowPanel('groups')} selectedGroup={group} />}
            <Buttons>
                <PrevButton disabled={!showPrev} onClick={() => prev()}>Prev</PrevButton>
                <NextButton disabled={!showNext} onClick={() => next()}>Next</NextButton>
            </Buttons>
            <Groups>
                {userGroups && userGroups.length > 0 && renderGroup()}
            </Groups>
        </ListWrapper>
    );
};

const Groups = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const NextButton = styled.button`
    padding: 0;
`;

const PrevButton = styled.button`
    padding: 0;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ListWrapper = styled.div`
`;

export default GroupList;
