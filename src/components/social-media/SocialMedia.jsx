import React, {useEffect, useRef} from 'react'
import {dsnCN} from '../../hooks/helper'
import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXTwitter, faDiscord, faTiktok, faGithub, faYoutube,faTelegram} from '@fortawesome/free-brands-svg-icons';
import {splittingItems} from "../../hooks/Spltting";


function SocialMedia({className}) {
    const ref = useRef();
    const socialData = [
        {link: "https://www.tiktok.com/@samerpro_", icon: faTiktok},
        {link: "https://t.me/+HqqMjL35NgY1ZWI8", icon: faTelegram},
        {link: "https://www.youtube.com/@SamerPro_", icon: faYoutube},
        {link: "https://x.com/sam__935 ", icon: faXTwitter},
        {link: "https://github.com/SamerPro-115", icon: faGithub},
        {link: "https://discord.gg/GxfAgbqMaZ ", icon: faDiscord},

    ];


    useEffect(() => {
        splittingItems(ref.current, 'li')
    });

    return (
        <ul className={dsnCN('social-one', className)} ref={ref}>
            {socialData.map((item, index) =>
                <li key={index}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={item.icon}/>
                    </a>
                </li>
            )}
        </ul>

    )
}

export default SocialMedia