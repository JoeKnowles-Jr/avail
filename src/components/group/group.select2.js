import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getAllGroups } from '../../actions/group.actions';

const GroupSelect = ({ groups, cancel, selectGroup }) => {
    const dispatch = useDispatch();
    const [displayGroups, setDisplayGroups] = React.useEffect(null);
    React.useEffect(() => {
        if (!groups) {
            dispatch(getAllGroups());
        }
    }, [dispatch]);
    
    if (!groups) {
        const { allGroups } = useSelector(state => state.group);
        setDisplayGroups(allGroups);
    } else {
        setDisplayGroups(groups);
    }

    const handleCancel = () => {
        cancel && cancel();
    }

    const handleChange = (value) => {
        if (value) {
            selectGroup(value);
        }
    }

    return (
        <SelectWrapper>
            {cancel && <button onClick={() => handleCancel()}>x</button>}
            <select className='select' onChange={(e) => handleChange(e.target.value)}>
                <option key='0' value=''>Select Group</option>
                {displayGroups && displayGroups.map(g => {
                    return <option key={g._id} value={JSON.stringify(g)}>{g.name}</option>
                })}
            </select>
        </SelectWrapper>
    );
};

const SelectWrapper = styled.div`
    .select {
        width: 100%;
    }
`;

export default GroupSelect;