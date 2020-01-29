import React, { useState, useEffect } from 'react';
import Synchs from './Synchs';
import './app.css';

function getDateFromString(dateStr) {
    const formattedTimeDate = dateStr.split(' '); //['28', 'июля', '2019']
    const monthLiteral = formattedTimeDate[1]; // 'июля'
    const monthNuber = monthLiteral.replace(monthLiteral, months[monthLiteral]); // 'июля' -> '07'
    const dateFinal = [formattedTimeDate[2], monthNuber, formattedTimeDate[0]].join('-'); // '2019-07-28'

    return new Date(dateFinal);
}

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
    // maybe to fix any prop add some generics
    const [tourns, setTourns] = useState([]);
    const [lastUpd, setLastUpd] = useState('');

    const getData = async () => {
        const res = await fetch('https://api.github.com/gists/2be45373cfe2010ebc4581abac7cb3cf');
        const data = await res.json();
        const { updated, synchs } = JSON.parse(data.files['chgk.json'].content);
        const u = new Date(updated);

        // manipulation for date conversion
        synchs.forEach(s => {
            if (s.nameTime.slice(s.nameTime.lastIndexOf('(') + 1, s.nameTime.lastIndexOf(')')).split('-')[1]) {
                const endDateString = s.nameTime
                    .slice(s.nameTime.lastIndexOf('(') + 1, s.nameTime.lastIndexOf(')'))
                    .split('-')[1]
                    .trim();

                s.endDate = getDateFromString(endDateString);

                {
                    const startDateString = s.nameTime
                        .slice(s.nameTime.lastIndexOf('(') + 1, s.nameTime.lastIndexOf(')'))
                        .split('-')[0]
                        .trim();

                    if (startDateString.length <= 2) {
                        const tmpDate = new Date(s.endDate.getTime()); // avoid mutating endDate

                        s.startDate = new Date(tmpDate.setDate(Number(startDateString)));
                    } else if (startDateString.split(' ').length === 2) {
                        const monthLiteral = startDateString.split(' ')[1];
                        const tmpDate = new Date(s.endDate.getTime()); // avoid mutating endDate

                        s.startDate = new Date(tmpDate.setMonth(Number(months[monthLiteral]) - 1, Number(startDateString.split(' ')[0])));
                    } else {
                        s.startDate = getDateFromString(startDateString);
                    }
                }
            }
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
        <div className="wrap">
            <div className="app">
                <header className="header">Synchs</header>
                <div className="last-update">Last update: {lastUpd}</div>
                <hr />
                <main>
                    <Synchs tourns={tourns} />
                </main>
            </div>
        </div>
    );
}

export default App;
