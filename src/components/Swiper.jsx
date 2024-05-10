import React from "react";
import { useRouter } from "next/router";
import setTime from '../assets/img/set_time.png';
import mrBet from '../assets/img/MrBetpng.png';
import wrazzle from '../assets/img/wrazzle_project.png';
import {Image} from "next/dist/client/image-component";
import 'swiper/css';
import 'swiper/css/virtual';

const SwiperBlock = () => {
    const router = useRouter();

    const handleClickOnImage = (slug) => {
        router.push(`/project/${slug}`)
    }
    return (
        <swiper-container
            className="image-swiper"
            space-between="10"
            slides-per-view="1"
            navigation="true"
            pagination-clickable="true"
            effect="cards"
            grab-cursor="true"
            cube-effect-shadow="true"
            cube-effect-slide-shadows="true"
            cube-effect-shadow-offset="20"
            cube-effect-shadow-scale="0.94"
            autoplay-delay="2000"
            autoplay-disable-on-interaction="false"
            center-slides="true"
        >
            <swiper-slide lazy="true">
                <Image src={setTime} alt="setTime" onClick={() => handleClickOnImage('settime')}/>
            </swiper-slide>

            <swiper-slide lazy="true">
                <Image src={mrBet} alt="mrBet" onClick={() => handleClickOnImage('mrbet')}/>
            </swiper-slide>

            <swiper-slide lazy="true">
                <Image src={wrazzle} alt="wrazzle" onClick={() => handleClickOnImage('wrazzle')}/>
            </swiper-slide>
        </swiper-container>
    );
};

export default SwiperBlock;