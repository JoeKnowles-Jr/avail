import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import Avail from '../components/avail/avail';
import AventInput from '../components/avent/avent.input';
// import AvailSummary from '../components/avail/avail.summary';
// import * as data from './sandbox.data';

const Sandbox = () => {
    // const [showNext, setShowNext] = React.useState(null);
    // const [showPrev, setShowPrev] = React.useState(null);
    // const [selectedAvent, setSelectedAvent] = React.useState();
    const [showCreateAvent, setShowCreateAvent] = React.useState(null);

    const user = useSelector(state => state.auth.user);

    const cancel = () => {
        setShowCreateAvent(false);
    }

    return (
        <SB>
            <h2>Sandbox</h2>
            <SandboxWrapper>
                {!showCreateAvent && <button onClick={() => setShowCreateAvent(true)}>Create Avent</button>}
                {showCreateAvent && <AventInput user={user} group='My Group' cancel={cancel} />}
            </SandboxWrapper>
        </SB>
    );
}

const SandboxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .gone {
        display: none;
    }
`;

const SB = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 4rem;
`;

export default Sandbox;
