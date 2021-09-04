import React from 'react';
import styled from 'styled-components';
import { getAvailDisplayDate } from '../../services/date.service';
import AvailList from './avail.list';

const AvailSummary = ({ uid, date, avails }) => {

    return (
        <AvailSummaryWrapper>
            <div>
                {date && <h4>{getAvailDisplayDate(date)}</h4>}
                <CountWrapper>
                    <TotalWrapper>Avails: {avails.length}</TotalWrapper>
                </CountWrapper>
            </div>

            <AvailList avails={avails} />
            
        </AvailSummaryWrapper>
    );
};

const TotalWrapper = styled.div`
    font-size: 1.5rem;
`;

const CountWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AvailSummaryWrapper = styled.div`
    background-color: #aaa;
    text-align: center;
    color: black;
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    textarea {
        margin-top: 1rem;
    }
`;

export default AvailSummary;