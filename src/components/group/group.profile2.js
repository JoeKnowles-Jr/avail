import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// import GroupPanel from './group.panel';
import GroupList from './group.list';
import styled from 'styled-components';

const GroupProfile = ({ user, userGroups}) => {

    return (
        <GroupProfileWrapper>
            <h4>You are a member of {userGroups && <span>{userGroups.length}</span>} groups</h4>
            {user && user.groups && <GroupList userGroups={userGroups} user={user} />}
        </GroupProfileWrapper>
    );
};

const GroupProfileWrapper = styled.div`
    margin-top: 1rem;
    text-align: center;
`;

export default GroupProfile;

