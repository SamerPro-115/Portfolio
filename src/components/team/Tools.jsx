import React from 'react'

import './style.scss'
import ToolsItem from './ToolsItem';
import 'swiper/css';


import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, SwiperOptions} from "swiper";

const TeamDetails = [
    {
        src: "/assets/img/project/project1/HTML.png",
       
    },
    {
        src: "/assets/img/project/project1/css.png",
    },
    {
        src: "/assets/img/project/project1/js.png",
      
    },
    {
        src: "/assets/img/project/project1/boo.png",
      
    },
    {
        src: "/assets/img/project/project1/jq.png",
        
    },
    {
        src: "/assets/img/project/project1/no.png",
       
    },
    {
        src: "/assets/img/project/project1/ex.png",
       
    },
    {
        src: "/assets/img/project/project1/mong.png",
        
    },


]


const Team = ({className, desktop, mobile, tablet, ...restProps}: SwiperOptions) => {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{clickable: true, el: '.swiper-pagination'}}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                992: desktop,
                768: tablet,
                576: mobile
            }}
            className={`dsn-team ${className || ''}`}
            {...restProps}
        >
            {TeamDetails.map((item, index) =>
                <SwiperSlide key={index}>
                    <ToolsItem src={item.src} title={item.title} subTitle={item.subTitle}/>
                </SwiperSlide>
            )}
            <div className="swiper-pagination"/>
        </Swiper>
    );
}

Team.defaultProps = {
    desktop: {
        slidesPerView: 2.5
    },
    tablet: {
        slidesPerView: 2

    },
    mobile: {
        slidesPerView: 2
    }
}

export default Team
