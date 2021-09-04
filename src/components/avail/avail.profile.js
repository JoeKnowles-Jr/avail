import React from 'react';
import AvailList from './avail.list';

const AvailProfile = ({user}) => {

    return (
        <div>
            <h4>You have {(user && user.avails) ? <span>{user.avails.length}</span> : 0} avails</h4>
            {user && user.avails && <AvailList avents={user.avails} />}        </div>
            
    );
};

export default AvailProfile;