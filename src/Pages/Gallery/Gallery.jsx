import React, { useState } from 'react'
import './Gallery.css'
import { useNavigate } from 'react-router-dom'
import Loading from '../../Components/Loading'

const Gallery = () => {
    const [box, setBox] = useState([1, 2, 3,4, 5, 4, 7, 8, 9, 0, 1, 3,3,4,5])
    const Nav = useNavigate()
  return (
    <div className='Gallery'>
        <div className="wrap">
        <h1>THE BITCOIN AND BLOCKCHAIN WITH IT'S POWER FOR INNOVATION</h1>
            <div className="cardHolder">
                {
                    box.length == 0 ? <Loading/> :
                    (
                        box.map((e) =>(
                            <section>
                                <div className="imgHolder">
                                    <img src="https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/AF290908-4B7B-46D9-AD6E-1FBD0228A3C4_1686206978.jpeg?width=2400&optimize=medium" alt="Loading..." />
                                </div>
                                {/* <h2>RECTIFICATION</h2> */}
                            <div className="btnHolder">
                                <button onClick={()=> Nav('/gallery-1')}>Choose</button>
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

export default Gallery