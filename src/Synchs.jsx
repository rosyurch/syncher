import React, { useState } from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    margin: 20px 0 0 0;
    padding: 0;
    list-style-type: none;
`;

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

const Input = styled.input`
    background-color: #282c34;
    color: #fff;
    border-radius: 20px;
    border: 2px solid goldenrod;
    padding: 5px 10px;
    font-size: 1.1em;
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

function Synchs(props) {
    const [query, setQuery] = useState('');

    const { tourns } = props;

    return (
        <>
            <label>
                <Input
                    type="text"
                    placeholder="SEARCH"
                    onChange={event => {
                        setQuery(event.target.value);
                    }}
                />
            </label>
            <Ul>
                {tourns
                    .filter(tourn => tourn.nameTime.toLowerCase().includes(query.toLowerCase()) || tourn.editors.toLowerCase().includes(query.toLowerCase()))
                    .map(tourn => (
                        <Li key={tourn.nameTime}>
                            <H>{tourn.nameTime}</H>
                            <Info>
                                {tourn.type} / {tourn.questions} / {tourn.price}
                            </Info>
                            <div>
                                {tourn.editors
                                    .split(')')
                                    .slice(0, -1)
                                    .map(edit => (
                                        <Editor key={edit}>{edit ? edit + ')' : ''}</Editor>
                                    ))}
                            </div>
                            <Links>
                                <A href={tourn.link} target="_blank">
                                    Link
                                </A>
                                {tourn.applicationAppealLink && (
                                    <A target="_blank" href={tourn.applicationAppealLink}>
                                        Заявка/апель
                                    </A>
                                )}
                            </Links>
                        </Li>
                    ))}
            </Ul>
        </>
    );
}

export default Synchs;
