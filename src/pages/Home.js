import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import Dash from '../components/dashboard/dash';
import { _PARSE_ as parse } from '../debug';

class Home extends PureComponent {

    componentDidMount() {
        if (parse) { this.props.getUser(this.props.user._id); }
        this.props.getAllGroups();
    }

    render() {
        return (
            <HomeWrapper>
                <Dash
                    allGroups={this.props.allGroups}
                    groupMessage={this.props.groupMessage}
                    user={this.props.user} />
            </HomeWrapper>
        );
    }
}

const HomeWrapper = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        groupMessage: state.group.message,
        allGroups: state.group.allGroups
    }
}

export default connect(mapStateToProps, actions)(Home);
