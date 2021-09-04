// import React from 'react';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';
// import GroupProfile from '../components/group/group.profile';
// import AventProfile from '../components/avent/avent.profile';
// import AvailProfile from '../components/avail/avail.profile';

// const Profile = () => {
//     const [showGroups, setShowGroups] = React.useState(false);
//     const [showAvents, setShowAvents] = React.useState(false);
//     const [showAvails, setShowAvails] = React.useState(false);

//     const toggle = (which) => {
//         setShowGroups(which === 'groups' ? true : false);
//         setShowAvents(which === 'avents' ? true : false);
//         setShowAvails(which === 'avails' ? true : false);
//     };

//     const user = useSelector(state => state.auth.user);

//     return (
//         <ProfileWrapper>
//             <ButtonsWrapper>
//                 <button onClick={(e) => {toggle(e.target.name)}} name='groups'>Groups</button>
//                 <button onClick={(e) => {toggle(e.target.name)}} name='avents'>Avents</button>
//                 <button onClick={(e) => {toggle(e.target.name)}} name='avails'>Avails</button>
//             </ButtonsWrapper>
//             {showGroups && <GroupProfile user={user} />}
//             {showAvents && <AventProfile />}
//             {showAvails && <AvailProfile />}
//         </ProfileWrapper>
//     );
// };

// const ButtonsWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-around;

// `;

// const ProfileWrapper = styled.div`
//     width: 100%;
// `;

// export default Profile;

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import GroupProfile from '../components/group/group.profile2';
import AventProfile from '../components/avent/avent.profile';
import AvailProfile from '../components/avail/avail.profile';
import { _PARSE_ as parse } from '../debug';

class Profile extends PureComponent {

    state = {
        which: 'groups'
    }

    componentDidMount() {
        if (parse) { this.props.getUser(this.props.user._id); }
        this.props.getUserGroups(this.props.user._id);
        this.props.getAllGroups();
        console.log("this.state.userGroups");
        console.log(this.props.user);
        console.log(this.props.message);
        console.log(this.props.allGroups);
        console.log(this.props.userGroups);
    }

    toggle = (which) => {
        this.setState({ which: which });
    }

    render() {
        console.log("userGroups", this.props.userGroups);
        return (
            <ProfileWrapper>
                <ButtonsWrapper>
                    <button onClick={() => this.toggle('groups')} name='groups'>Groups</button>
                    <button onClick={() => this.toggle('avents')} name='avents'>Avents</button>
                    <button onClick={() => this.toggle('avails')} name='avails'>Avails</button>
                </ButtonsWrapper>
                {(this.state.which === 'groups') && <GroupProfile user={this.props.user} userGroups={this.props.userGroups} />}
                {(this.state.which === 'avents') && <AventProfile />}
                {(this.state.which === 'avails') && <AvailProfile />}
            </ProfileWrapper>
        );
    }
}

const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

`;

const ProfileWrapper = styled.div`
    width: 100%;
`;

const mapStateToProps = (state) => {
    return {
        which: 'groups',
        user: state.auth.user,
        groupMessage: state.group.message,
        allGroups: state.group.allGroups,
        userGroups: state.group.userGroups
    }
}

export default connect(mapStateToProps, actions)(Profile);
