import React, { useState, useEffect } from 'react';
import Synchs from './Synchs';
import './app.css';
import { Tourn } from './types';

// const months = {
//     января: '01',
//     февраля: '02',
//     марта: '03',
//     апреля: '04',
//     мая: '05',
//     июня: '06',
//     июля: '07',
//     августа: '08',
//     сентября: '09',
//     октября: '10',
//     ноября: '11',
//     декабря: '12',
// };

function App() {
    // maybe add some generics
    const [tourns, setTourns] = useState<Tourn[]>([]);
    const [lastUpd, setLastUpd] = useState('');

    const getData = async () => {
        const res = await fetch('https://api.github.com/gists/2be45373cfe2010ebc4581abac7cb3cf');
        const data = await res.json();
        const { updated, synchs }: { updated: string; synchs: Tourn[] } = JSON.parse(data.files['chgk.json'].content);
        const u = new Date(updated);

        // // manipulation for date conversion
        // synchs.forEach(s => {

        //     const endDateString = s.nameTime
        //         .slice(s.nameTime.lastIndexOf('(') + 1, s.nameTime.lastIndexOf(')'))
        //         .split('-')[1]
        //         .trim();

        //     const formattedEndDate = endDateString.split(' '); //['28', 'июля', '2019']
        //     const monthLiteral = formattedEndDate[1]; // 'июля'
        //     const monthNuber = monthLiteral.replace(monthLiteral, months[monthLiteral]); // 'июля' -> '07'
        //     const dateFinal = [formattedEndDate[2], monthNuber, formattedEndDate[0]].join('-'); // '2019-07-28'
        //     s.endDate = new Date(dateFinal);
        // });

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
