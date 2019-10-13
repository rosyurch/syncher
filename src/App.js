import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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

const months = {
    января: '01',
    февраля: '02',
    марта: '03',
    апреля: '04',
    мая: '05',
    июня: '06',
    июля: '07',
    августа: '08',
    сентября: '09',
    октября: '10',
    ноября: '11',
    декабря: '12',
};

function App() {
    const [tourns, setTourns] = useState([]);
    const [lastUpd, setLastUpd] = useState('');

    const getData = async () => {
        const res = await fetch('https://api.github.com/gists/c3f3f735a28b010bfcbff2ecf56c72a9');
        const data = await res.json();
        const { updated, synchs } = JSON.parse(data.files['chgk-data.json'].content);
        const u = new Date(updated);

        synchs.forEach(s => {
            const endDateString = s.nameTime
                .slice(s.nameTime.lastIndexOf('(') + 1, s.nameTime.lastIndexOf(')'))
                .split('-')[1]
                .trim();
            const formattedEndDate = endDateString.split(' '); //['28', 'июля', '2019']
            const monthLiteral = formattedEndDate[1]; // 'июля'
            const monthNuber = monthLiteral.replace(monthLiteral, months[monthLiteral]); // 'июля' -> '07'
            const dateFinal = [formattedEndDate[0], monthNuber, formattedEndDate[2]].reverse().join('-'); // '2019-07-28'
            s.endDate = new Date(dateFinal);
        });

        setLastUpd(
            `${u.getHours()}:${u.getMinutes().toString().length < 2 ? '0' + u.getMinutes() : u.getMinutes()}:${u.getSeconds()} ${u.getDate()}-${u.getMonth() +
                1}-${u.getFullYear()}`
        );
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
                    <Synchs tourns={tourns} />
                </main>
            </Div>
        </Wrap>
    );
}

export default App;
