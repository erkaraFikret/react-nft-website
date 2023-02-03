import React from 'react'
import './infoItem.css'

function InfoItem(props) {
    const { info } = props
    return (
        <div className='info-item absolute-center'>
            <img src={info.logo} alt={info.section_title} className="info-item-img"/>
            <div className='info-item-title'>
                {info.section_title}
            </div>
            <div className='info-item-desc'>{info.description}</div>
        </div>
    )
}

export default InfoItem