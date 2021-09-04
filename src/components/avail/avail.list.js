import React from 'react';
import styled from 'styled-components';
import Avail from './avail';



const AvailList = ({ avails }) => {
    const [currentAvail, setCurrentAvail] = React.useState(0);
    const [showNext, setShowNext] = React.useState(null);
    const [showPrev, setShowPrev] = React.useState(null);

    React.useEffect(() => {
        if (avails.length > 0) {
            setShowNext(!currentAvail === avails.length - 1);
            setShowPrev(!currentAvail - 1 < 0);
        }
    }, [currentAvail]);

    React.useEffect(() => {
        setCurrentAvail(0);
    }, [])

    return (
        <div>
            {avails.length > 0 &&
                <Avails>
                <Avail showNext={showNext} showPrev={showPrev} avail={avails[currentAvail]}  />
                </Avails>
            }
        </div>
    );
};

const Avails = styled.div`

`;

export default AvailList;
