import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
    {
        icon: 'assets/img/services/ui-design.png',
        title: "Front-End",
        description: "I specialize in creating visually stunning and user-friendly interfaces using modern technologies like HTML, CSS, and JavaScript.",
    },
    {
        icon: 'assets/img/services/support.png',
        title: "SUPPORT",
        description: "I am committed to providing unwavering support to my clients. Whether it's addressing challenges, answering questions, or offering guidance, I am always available when you need me.",
    },
    {
        icon: 'assets/img/services/back-end.png',
        title: "Back-End",
        description: "I have a strong command of server-side technologies, enabling me to build robust and scalable backend systems. With experience in frameworks like Node.js.",
    },
   
]

const ServiceOne = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-one', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                            <span className='icon mb-20'>
                                <LazyImg src={item.icon} alt={item.title}/>
                            </span>
                        <h4 className='title-block mb-20'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceOne