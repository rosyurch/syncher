import React, { useState } from 'react';
import Synch from './Synch';
import './synchs.css';
import { Tourn } from './types';

// const now = new Date();

function Synchs({ tourns }: Tourn[]) {
    const [query, setQuery] = useState('');
    // const [endDate, setEndDate] = useState(now);

    // const { tourns } = props;

    return (
        <>
            <form>
                <input
                    className="input"
                    aria-label="text search input"
                    type="text"
                    placeholder="SEARCH"
                    onChange={event => {
                        setQuery(event.target.value);
                    }}
                />

                {/* <input
                    className="input-date"
                    aria-label="date filtering"
                    type="date"
                    onChange={event => {
                        if (event.target.value === '') setEndDate(now);
                        else setEndDate(new Date(event.target.value));
                    }}
                /> */}
            </form>
            <ul className="ul">
                {tourns
                    .filter(
                        (tourn: Tourn) =>
                            tourn.nameTime.toLowerCase().includes(query.toLowerCase()) || tourn.editors.toLowerCase().includes(query.toLowerCase())
                    )
                    .map((tourn: Tourn) => (
                        <Synch {...tourn} key={tourn.nameTime} />
                    ))}
            </ul>
        </>
    );
}

export default Synchs;
