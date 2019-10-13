import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    margin: 10px 5px 0 5px;
    padding: 5px;
    border: 1px solid goldenrod;
    border-radius: 20px;
`;

const Editor = styled.div`
    font-size: 0.9em;
    width: 60%;
    margin: 0 auto;
    text-align: left;
    @media (max-width: 700px) {
        width: 95%;
    }
`;

const Info = styled.div`
    color: goldenrod;
    font-weight: 500;
`;

const H = styled.h3`
    margin: 0;
    padding: 0;
`;

const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const A = styled.a`
    text-decoration: none;
    color: #99f;
    &:hover,
    :active {
        background-color: #fff;
        color: #000;
    }
`;

function Synch(props) {
    const { nameTime, type, questions, price, editors, link, applicationAppealLink } = props;
    return (
        <Li>
            <H>{nameTime}</H>
            <Info>
                {type} / {questions} / {price}
            </Info>
            <div>
                {editors
                    .split(')')
                    .slice(0, -1)
                    .map(edit => (
                        <Editor key={edit}>{edit ? edit + ')' : ''}</Editor>
                    ))}
            </div>
            <Links>
                <A href={link} target="_blank" rel="noreferrer">
                    Link
                </A>
                {applicationAppealLink && (
                    <A target="_blank" rel="noreferrer" href={applicationAppealLink}>
                        Заявка/апель
                    </A>
                )}
            </Links>
        </Li>
    );
}

export default Synch;
