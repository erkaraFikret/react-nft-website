import React from 'react'
import './trendingNfts.css'
import Slider from "react-slick";
import { TRENDING_NFTS } from '../../data/trendingNfts';
import TrendingCard from './TrendingCard/index'
import Button from '../../common/buttons/index'

const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    speed: 500,
    arrow: false,
}
function TrendingNfts() {
    return (
        <div className='trending-nfts'>
            <div className='nft-title absolute-center'>
                <span className='heading-gradient'>
                    TRENDİNG NFTs
                </span>
            </div>
            <div className='nft-bg'></div>
            <Slider {...settings}>
                {TRENDING_NFTS.map((nft) => (
                    <TrendingCard nft={nft}/>
                ))}
            </Slider>
            <div className='absolute-center nft-btn'>
            <Button btnText="SEE MORE" type="Secondary" customClass="seemore-btn"/>
            </div>
        </div>
    )
}

export default TrendingNfts