import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Reqs from './Reqs';
import Synchs from './Synchs';

const Div = styled.div`
    color: #fff;
    text-align: center;
    background-color: #282c34;
`;

const Upd = styled.div`
    margin-right: 10px;
    text-align: right;
    font-size: 1em;
`;

const Header = styled.header`
    font-size: 2em;
`;

function App() {
    const [tourns, setTourns] = useState([]);
    const [requests, setRequests] = useState([]);
    const [lastUpd, setLastUpd] = useState('');

    const getData = async () => {
        const res = await fetch('http://127.0.0.1:4321/chgkinfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: 'edb8e45f64b03144b39cd91b0678e3e1',
        });
        const data = await res.json();
        const { updated, yourReqs, synchs } = data;
        setLastUpd(updated);
        setRequests(yourReqs);
        setTourns(synchs);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Div className="App">
            <Header className="App-header">Synchs</Header>
            <Upd>Last update: {lastUpd}</Upd>
            <hr />
            <Reqs requests={requests} />
            <Synchs tourns={tourns} />
        </Div>
    );
}

export default App;
