import React, { useState } from 'react';
import styled from 'styled-components';

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
`;

function Synchs(props) {
    const [query, setQuery] = useState('');

    const { tourns } = props;

    return (
        <>
            <label>
                Search:
                <input
                    type="text"
                    onChange={event => {
                        setQuery(event.target.value);
                    }}
                />
            </label>
            <Ul>
                {tourns
                    .filter(tourn => tourn.nameTime.toLowerCase().includes(query.toLowerCase()))
                    .map(tourn => (
                        <Li key={tourn.nameTime}>{tourn.nameTime}</Li>
                    ))}
            </Ul>
        </>
    );
}

export default Synchs;
