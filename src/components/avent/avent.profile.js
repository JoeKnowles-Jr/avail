import React from 'react';
import AventList from './avent.list';

const AventProfile = ({user}) => {

    return (
        <div>
            <h4>You are a member of {(user && user.avents) ? <span>{user.avents.length}</span> : 0} avents</h4>
            {user && user.avents && <AventList avents={user.avents} />}
        </div>
    );
};

export default AventProfile;