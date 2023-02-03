import React from 'react'
import { INFO_ITEMS } from '../../data/infoItems'
import InfoItem from './infoItem'
import './infoSection.css'

function InfoSection() {
    return (
        <div className='info-section '>
            <div className='info-section-heading absolute-center'>
                <span className='heading-gradient'>Create and sell your NFT's</span>
            </div>
            <div className='info-section-container'>
                {INFO_ITEMS.map((info) => (
                    <InfoItem info={info}/>
                ))}
            </div>
        </div>
    )
}

export default InfoSection