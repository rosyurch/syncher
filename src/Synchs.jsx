import React, { useState } from 'react';
import Synch from './Synch';
import styled from 'styled-components';

const Ul = styled.ul`
    margin: 20px 0 0 0;
    padding: 0;
    list-style-type: none;
`;

const Input = styled.input`
    margin-right: 3em;
    background-color: #282c34;
    color: #fff;
    border-radius: 20px;
    border: 2px solid goldenrod;
    padding: 5px 10px;
    font-size: 1.1em;
    @media (max-width: 700px) {
        margin-right: 0;
        margin-bottom: 1em;
    }
`;

const InputDate = styled.input`
    background-color: #282c34;
    color: #bbb;
    border-radius: 20px;
    border: 2px solid goldenrod;
    padding: 5px 10px;
    font-size: 1.4em;
`;

const now = new Date();

function Synchs(props) {
    const [query, setQuery] = useState('');
    const [endDate, setEndDate] = useState(now);

    const { tourns } = props;

    return (
        <>
            <form>
                <Input
                    aria-label="text search input"
                    type="text"
                    placeholder="SEARCH"
                    onChange={event => {
                        setQuery(event.target.value);
                    }}
                />

                <InputDate
                    aria-label="date filtering"
                    type="date"
                    onChange={event => {
                        if (event.target.value === '') setEndDate(now);
                        else setEndDate(new Date(event.target.value));
                    }}
                />
            </form>
            <Ul>
                {tourns
                    .filter(
                        tourn =>
                            tourn.endDate > endDate &&
                            (tourn.nameTime.toLowerCase().includes(query.toLowerCase()) || tourn.editors.toLowerCase().includes(query.toLowerCase()))
                    )
                    .map(tourn => (
                        <Synch {...tourn} key={tourn.nameTime} />
                    ))}
            </Ul>
        </>
    );
}

export default Synchs;
