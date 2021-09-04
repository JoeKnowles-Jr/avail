import React from 'react';
import styled from 'styled-components';
import Avent from './avent';



const GroupList = ({ avents }) => {
    const [currentAvent, setCurrentAvent] = React.useState(0);
    const [showNext, setShowNext] = React.useState((avents && avents.length > 0) ? true : false);
    const [showPrev, setShowPrev] = React.useState(false);

    console.log(avents);

    const next = () => {
        const nextAvent = currentAvent + 1;
        if ((avents && avents.length < 2) || nextAvent >= avents.length - 1) {
            setShowNext(false);
            if ((avents && avents.length < 2) || nextAvent <= 0) {
                setShowPrev(false);
            }
            return;
        }
        setShowNext(true);
        setShowPrev(true);
        setCurrentAvent(nextAvent);
    };

    const prev = () => {
        const nextAvent = currentAvent - 1;
        if ((avents && avents.length < 2) || nextAvent < 0) {
            setShowPrev(false);
            if ((avents && avents.length < 2) || nextAvent >= avents.length - 1) {
                setShowNext(false);
            }
            return;
        }
        setShowNext(true);
        setShowPrev(true);
        setCurrentAvent(nextAvent);
    }

    console.log(currentAvent);

    return (
        <div>
            <Avents>
                {avents.length > 0 &&
                    <Avent next={next} showNext={showNext} prev={prev} showPrev={showPrev} avent={avents[currentAvent]} />
                }
            </Avents>
        </div>
    );
};

const Avents = styled.div`
    display: flex;
    justify-content: center;
`;

export default GroupList;
