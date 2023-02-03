import React from 'react'
import './brandIntegration.css'
import { allBrands } from '../../common/brands'


function BrandIntegration() {
    return (
        <div className='brands-integration absolute-center'>
            {
                allBrands.map((brand, index) => {
                    return(
                        <div className='brand-container'>
                            
                            <img src={brand.img} alt={brand.title} className="brand-img"/>
                            <h2>{brand.title}</h2>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BrandIntegration