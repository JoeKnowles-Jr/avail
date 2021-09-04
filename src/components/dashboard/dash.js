import React from 'react';
import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import GroupPanel from '../group/group.panel';
import AventPanel from '../avent/avent.panel';
import AvailSummary from '../avail/avail.summary';
import history from '../../history';

const Dash = ({ user, allGroups, groupMessage }) => {
    const dispatch = useDispatch();
    const [selectedDay, onChange] = React.useState(new Date());
    const [selectedGroup, setSelectedGroup] = React.useState(null);
    const [displayAvails, setDisplayAvails] = React.useState([]);

    const selectGroup = (groupString) => {
        console.log(groupString);
        if (groupString) {
            setSelectedGroup(JSON.parse(groupString));
        }
    };

    React.useEffect(() => {
        if (selectedDay && user && user.avails) {
            setDisplayAvails(user.avails.filter(a => { return a.date === selectedDay }));
        }
    }, [selectedDay]);

    React.useEffect(() => {

    }, [dispatch]);

    console.log(selectedGroup);

    return (
        <DashWrapper>
            <fieldset>
                {user && <legend>{user.firstName} {user.lastName}</legend>}
                <GridWrapper>
                    <Left>
                        <ButtonWrapper>
                            <button onClick={() => {history.push('/profile')}} title='Profile'>Profile</button>
                        </ButtonWrapper>
                        <CalendarWrapper>
                            <div>
                                <Calendar
                                    tileClassName='round'
                                    defaultValue={new Date()}
                                    calendarType="US"
                                    onChange={onChange}
                                    value={selectedDay} />
                            </div>
                        </CalendarWrapper>
                        {user && selectedDay &&
                            <AvailSummary
                                uid={user._id}
                                avails={displayAvails}
                                date={selectedDay}
                                setDisplayAvails={setDisplayAvails} />
                        }
                        <GroupWrapper>
                            <GroupPanel user={user} allGroups={allGroups} selectGroup={selectGroup} />
                        </GroupWrapper>
                    </Left>
                    <Right>
                        <AventPanel user={user} selectedDay={selectedDay} selectedGroup={selectedGroup} />
                    </Right>
                </GridWrapper>
            </fieldset>
        </DashWrapper>
    );
};

const Right = styled.div`
    
`;

const Left = styled.div`

`;

const ButtonWrapper = styled.div`
    width: 100%;
    padding: 0 3rem;
    button {
        width: 100%;
    }
`;

const CalendarWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 1rem auto;
    .round {
        border-radius: 50%;
    }
    div {
        margin: 0 auto;
    }
`;

const GridWrapper = styled.div`
    grid-template-columns: 100%;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`;

const GroupWrapper = styled.div`
    width: 100%;
    margin: 0 0 1rem;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 0 1rem;
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

    /* and a bonus!!! minus :-) */
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

const DashWrapper = styled.div`
    width: 90%;
    margin-bottom: 3rem;
    fieldset {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 1rem;
        border-radius: 5;
        border: 1px solid white;
        align-items: 'center';
    }
    legend {
        width: auto;
        margin-left: 1rem;
        background-color: '#FFFFFF';
    }
`;

export default Dash;