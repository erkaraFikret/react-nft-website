import React from 'react'
import Button from '../../common/buttons';
import './topFold.css'

function TopFold() {
    return (
        <div className='topfold absolute-center'>
            <div className='topfold-left'>
                <div className='topfold-heading'>Discover collect, & sell <span className='heading-gradient'>Extraordinary</span>NFTs</div>
                <div className='topfold-desc'>the leading NFT Marketplace on EthereumHome to the next generation of digital creators.
                    Discover the best NFT collections.</div>
                <div className="tf-left-buttons">
                    <Button btnType="PRIMARY" btnText="EXPLORE" />
                    <Button btnType="SECONDARY" btnText="Create" customClass="tf-left-secondary-btn" />
                </div>
                <div className='tf-left-info'>
                    <div className='tf-left-info-item absolute-center'>
                        <div className='tf-infoItem-count'>200K+</div>
                        <div className='tf-infoItem-label'>Collections</div>
                    </div>
                    <div className='tf-left-info-item absolute-center'>
                        <div className='tf-infoItem-count'>10K+</div>
                        <div className='tf-infoItem-label'>Artists</div>
                    </div>
                    <div className='tf-left-info-item absolute-center'>
                        <div className='tf-infoItem-count'>423+</div>
                        <div className='tf-infoItem-label'>Community</div>
                    </div>
                </div>
            </div>
            <div className='topfold-right'>
                <div className='tf-right-bg'></div>
                <div className='tf-right-diamond'>
                    <div className='tf-right-diamond-item absolute-center'>
                        <img src="https://i.seadn.io/gae/_ZhYdJi4IJnUe_TrHatTVmPxj6XZRevq--bx6--xHhNmfjF9Kie6xSWjdTO0nvUb3jIBHfrwlsTptfX0I5CbY62JzO_6Hu26-5R-Mg?auto=format&w=384" alt="diamond-banner"  className='tf-right-diamond-img'/>
                    </div>
                    <div className='tf-right-diamond-item absolute-center'>
                        <img src="https://i.seadn.io/gae/fMyahDd4rjlIySx6di3XKbR7CrBsFuk-vcmrraPq4GjLlXYcFCoOSGb6vUkiUfq6B_RTEKQQqeRE4eZi4Bi_l7DYcaLRm9c7Jy7T8A?auto=format&w=384" alt="diamond-banner"  className='tf-right-diamond-img'/>
                    </div>
                    <div className='tf-right-diamond-item absolute-center'>
                        <img src="https://i.seadn.io/gcs/files/cb683430199a6619db82aacf2b1029e1.gif?auto=format&w=1000" alt="diamond-banner"  className='tf-right-diamond-img'/>
                    </div>
                    <div className='tf-right-diamond-item absolute-center'>
                        <img src="https://i.seadn.io/gae/j3Tp4AoR2h7ZvAjcPMALGLOt4yXXbNY0rwvFdWkyHv6yqOLXXq09dgHtceRkjiQ4Cr4MP4qS9SHisHTDzh1dTAZihgxpDRW7jdpV2Q?auto=format&w=1000" alt="diamond-banner"  className='tf-right-diamond-img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFold;