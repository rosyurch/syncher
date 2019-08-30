import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Reqs from './Reqs';
import Synchs from './Synchs';

const Wrap = styled.div`
    background-color: #282c34;
`;

const Div = styled.div`
    color: #fff;
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    @media (min-width: 900px) {
        width: 70%;
        margin: 0 auto;
    }
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
        const res = await fetch('https://api.github.com/gists/c3f3f735a28b010bfcbff2ecf56c72a9');
        const data = await res.json();
        const { updated, yourReqs, synchs } = JSON.parse(data.files['chgk-data.json'].content);
        const u = new Date(updated);

        setLastUpd(
            `${u.getHours()}:${u.getMinutes().toString().length < 2 ? '0' + u.getMinutes() : u.getMinutes()}:${u.getSeconds()} ${u.getDate()}-${u.getMonth() +
                1}-${u.getFullYear()}`
        );
        setRequests(yourReqs);
        setTourns(synchs);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Wrap>
            <Div className="App">
                <Header className="App-header">Synchs</Header>
                <Upd>Last update: {lastUpd}</Upd>
                <hr />
                <main>
                    <Reqs requests={requests} />
                    <Synchs tourns={tourns} />
                </main>
            </Div>
        </Wrap>
    );
}

export default App;
