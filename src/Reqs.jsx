import React from 'react';
import styled from 'styled-components';

// inactive for now

const Ul = styled.ul`
    margin: 20px 0;
    padding: 0;
    list-style-type: none;
`;

const Li = styled.li`
    margin: 10px 5px;
    padding: 5px;
    border: 1px solid goldenrod;
    border-radius: 20px;
    color: #99f;
`;

const SmallText = styled.span`
    font-size: 0.94em;
    color: #fff;
`;

function Reqs(props) {
    const { requests } = props;
    return (
        <Ul>
            Заявки:
            {requests.map(request => (
                <Li key={request.name}>
                    <SmallText>{request.name}</SmallText>
                    <br />
                    {request.status}
                    <br />
                    <SmallText>{request.time}</SmallText>
                </Li>
            ))}
        </Ul>
    );
}

export default Reqs;
