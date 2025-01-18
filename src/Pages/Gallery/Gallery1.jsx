import React, { useState } from 'react'
import './Gallery.css'
import { useNavigate } from 'react-router-dom'


const Gallery1 = () => {
        const [box, setBox] = useState([1, ])
    const Nav = useNavigate()
  return (
    <div className='Gallery1'>
        <div className="wrap">
            {/* <h1>CONNECT YOUR WALLET</h1> */}
            <div className="cardHold">
            {
                    box.length == 0 ? <Loading/> :
                    (
                        box.map((e) =>(
                            <section>
                                <div className="imgHolder" >
                                    <img onClick={() => Nav('/contact-us')} src="https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/3848BA18-895B-46E8-8BEA-D9456182C11E_1686207587.jpeg?width=2400&optimize=medium" alt="Loading..." />
                                </div>
                            </section>
                        ))
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Gallery1