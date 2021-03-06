import React from 'react';
import './synch.css';

type Tourn = {
    applicationAppealLink: string | null;
    editors: string;
    link: string;
    nameTime: string;
    price: string;
    questions: string;
    type: string;
};

function Synch({ nameTime, type, questions, price, editors, link, applicationAppealLink }: Tourn) {
    return (
        <li className="list-item">
            <h3 className="header">{nameTime}</h3>
            <div className="info">
                {type} / {questions} / {price}
            </div>
            <div>
                {editors
                    .split(')')
                    .slice(0, -1)
                    .map(edit => (
                        <div className="editor" key={edit}>
                            {edit ? edit + ')' : ''}
                        </div>
                    ))}
            </div>
            <div className="links">
                <a className="link" href={link} target="_blank" rel="noopener noreferrer">
                    Link
                </a>
                {applicationAppealLink && (
                    <a className="link" target="_blank" rel="noopener noreferrer" href={applicationAppealLink}>
                        Заявка/апель
                    </a>
                )}
            </div>
        </li>
    );
}

export default Synch;
