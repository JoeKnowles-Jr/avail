import React from 'react';
import { useSelector } from 'react-redux';
import GroupPanel from './group.panel';
import GroupList from './group.list';
import styled from 'styled-components';

const GroupProfile = ({ user, userGroups }) => {
    console.log("userGroups")
    console.log(userGroups)

    const uGroups = useSelector(state => state.group.userGroups);
    console.log(uGroups);

    return (
        <GroupProfileWrapper>
            <h4>You are a member of {user && user.groups && <span>{user.groups.length}</span>} groups</h4>
            {user && user.groups && <GroupList userGroups={userGroups} user={user} />}
        </GroupProfileWrapper>
    );
};

const GroupProfileWrapper = styled.div`
margin-top: 1rem;
    text-align: center;
`;

export default GroupProfile;