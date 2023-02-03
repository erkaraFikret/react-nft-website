import React from 'react'
import './trendingCard.css'

function TrendingCard(props) {
    const { nft } = props;
    return (
        <div className='trending-card absolute-center'>
            <div className='card-inner-wrapper'>
                <div className='card-content'>
                    <img src={nft.banner} alt={nft.user_name} className="card-img" />
                    <div className='card-info'>
                        <div className='card-info-left'>
                            <img src={nft.user_logo} alt={nft.user_name} className="user-logo" />
                            <div>
                                <div className='card-username'>{nft.user_name}</div>
                                <div className='card-userhandle'>{nft.userhandle}</div>
                            </div>
                        </div>
                        <img src="https://cdn3d.iconscout.com/3d/free/thumb/ethereum-3678201-3061794@0.png" alt="ethereum_logo" className='card-eth' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard