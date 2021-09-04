import React from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../actions/user.actions';

const UserSelect = () => {

    React.useEffect(() => {
        getAllUsers();
    }, []);
    
    const users = useSelector(state => state.users.allUsers);

    return (
        <div>
            <select>
                {users && users.map(u => {
                    return <option value={u.id}>{`${u.firstName} ${u.lastName}`}</option>
                })}
            </select>
        </div>
    );
};

export default UserSelect;