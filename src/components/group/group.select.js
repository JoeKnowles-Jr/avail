import React from 'react';
import styled from 'styled-components';

const GroupSelect = ({ groups, selectGroup, cancel}) => {
    return (
        <SelectWrapper>
            <select className='select' onChange={(e) => selectGroup(e)}>
                <option key='0' value='default'>Select Group</option>
                {groups && groups.map(g => {
                    return <option
                        className={`${g.restricted ? 'restricted' : 'open'}`}
                        key={g._id}
                        value={JSON.stringify(g)}>
                        {g.name}
                    </option>
                })}
            </select>
        </SelectWrapper>
    );
};

const SelectWrapper = styled.div`
    .select {
        width: 100%;
    }
    .restricted {
        color: red;
    }
    .open {
        color: green;
    }
`;

export default GroupSelect;
