import React, { useState } from 'react'
import './Gallery.css'
import { useNavigate } from 'react-router-dom'
import Loading from '../../Components/Loading'

const Gallery = () => {
    const [box, setBox] = useState([
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/43E38DF7-DD67-42F0-AF06-FF9DE3EDAD62_1686206978.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/AF290908-4B7B-46D9-AD6E-1FBD0228A3C4_1686206978.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/6C9C23B2-A88D-4876-B7FD-759565E2BC3C_1686206978.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/788A40AE-8016-4B32-B5B5-558E05841F74_1686206978.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/6CC7B780-DEA3-4A9F-B95E-12556A045849_1686206978.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/D5B441D1-0E38-4FF9-9FB2-B1D0746D3A72_1686206978.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/3028BD37-870E-4690-A497-8E7C39F7E19D_1686206979.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/2B3B122B-E11B-4E29-9A6E-F1D181A08BB0_1686206979.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/E042C608-1C12-4E7F-BC84-E56E556C7238_1686206979.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/7C9A73C0-CE2F-45BA-9906-ACC9ACAA5BC6_1686206979.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/0806D7AF-AE73-4161-A437-03681EB58592_1686206979.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/7AAA865D-9998-4D0A-82A9-FB36E027D8A0_1686206979.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/70F5A3ED-B471-49CF-9204-DBB53448AE7F_1686206979.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/DA68C0D9-DC79-4F95-A785-66B0DE76E2E4_1686206978.jpeg?width=2400&optimize=medium'
        },
        {
            img: 'https://5f77a7d4d1555eb600dc.cdn6.editmysite.com/uploads/b/5f77a7d4d1555eb600dc0c225965385312d8c41f4f1e49be6119ebc46adae15c/5E18EAB9-FE87-4378-A376-4A07EAD00D09_1686206979.jpeg?width=2400&optimize=medium'
        },
    ])
    const Nav = useNavigate()
  return (
    <div className='Gallery'>
        <div className="wrap">
        <h1>THE BITCOIN AND BLOCKCHAIN WITH IT'S POWER FOR INNOVATION</h1>
            <div className="cardHolder">
                {
                    box.length == 0 ? <Loading/> :
                    (
                        box.map((e, index) =>(
                            <section>
                                <div className="imgHolder" key={index}>
                                    <img src={e?.img} alt="Loading..." />
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