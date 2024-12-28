import React from 'react';
import './style.scss'
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <h3>Start a new project?</h3>
            <h5 className="mt-30">Let's Create Something Amazing Together!
            </h5>
            <p className="mt-10">
            Looking to bring your ideas to life with a stunning, functional website? At SamerPro, I specialize in crafting tailored web solutions that make your business stand out.
            </p>

            <ul className="mt-30">
                <li>
                    <span className="mr-10">Email</span>
                    <a href="mailto:newsamer123@gmail.com?subject=موقع جديد&body=السلام عليكم ورحمة الله." target="_blank" rel="noreferrer">newsamer123@gmail.com</a>
                </li>
                <li>
                    <span className="mr-10">Address</span>
                    <a href="#" target="_blank" rel="noreferrer">Saudi Arabia, Riyadh</a>
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;