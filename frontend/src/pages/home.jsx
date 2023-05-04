
import { useEffect, useRef, useState } from "react";
import LogoEye from "../components/logo";
import NavBar from "../components/navbar";

import PropmtBlock from "../components/propmt";
import { Footer, GraphicSection, syntax, TypePropmt, TypeText } from "../components/tools";
import { homeCodes } from "../components/util/codeBlocks.js";
// styles
import '../style/components/logoEyes.css'
import '../style/pages/home.css'
import { gsap } from "gsap";



export default function Home() {
    const [currentId, setId] = useState('code1')
    const [currentPropmt, setPropmt] = useState(null)
    

    useEffect(()=>{

        // desktop
        let moveableArea = document.getElementById('topName')
        onscroll = (e)=>{
            window.scrollY
        }
    }, [])

    function TypeTexts(arrayBlock, type) {
        if (type == 'text') {
            return (arrayBlock.map(element => {
                return (
                    <TypeText key={element.id} text={element.text} id={element.id} next={element.next} getId={currentId} action={setId} />
                )
            }))
        }
        else {
            return (arrayBlock.map(element => {
                return (
                    <TypePropmt
                        text={element.text} key={element.id} id={element.id} getId={currentId} nText={element.nText} action={setId}
                        yText={element.yText} next={element.next} setP={setPropmt} currentP={currentPropmt}
                    />
                )
            }))
        }
    }
    return (
        <>
            <main>
                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(homeCodes.block1, 'text')}
                    </div>
                </section>

                <GraphicSection id='code4' getId={currentId} next='prop1' action={setId}>
                    <div className="heroOne_Wrap">
                        <h2>hello, i am</h2>
                        <div className="animBox_one">
                            <div className="topName_name" id="topName">
                                <h1 className="AnimeName " style={{ color: 'none' }}>
                                    David
                                </h1>
                                <h1 className="AnimeName " >
                                    David
                                </h1>
                                <h1 className="AnimeName " id='name1'>
                                    David
                                </h1>
                            </div>
                            <div className="bottomName_home">
                                <h1>
                                    Ok <span className="grn"><h1>oo</h1></span> ye
                                </h1>
                            </div>
                        </div>
                        <p>
                            A creative UI UX designer and Full Stack   developer based in Nigeria.
                        </p>
                    </div>
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(homeCodes.block2, 'prop')}
                        {TypeTexts(homeCodes.block3, 'text')}
                    </div>
                </section>

                <GraphicSection id='code6' getId={currentId} next='code7' action={setId}>
                     
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(homeCodes.block4, 'text')}
                    </div>
                </section>

                <GraphicSection id='code13' getId={currentId} next='code14' action={setId}>
                     
                     
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(homeCodes.loading1, 'text')}
                    </div>
                </section>

                <GraphicSection id='code15' getId={currentId} next='code16' action={setId}>
                    <div className="heroOne_Wrap">
                        <h2>Some of my best projects</h2>
                        
                    </div>
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(homeCodes.block5, 'text')}
                        {TypeTexts(homeCodes.block6, 'prop')}
                        {TypeTexts(homeCodes.loading2, 'text')}
                    </div>
                </section>

                <GraphicSection id='code19' getId={currentId} next='code20' action={setId}>
                    <div className="heroOne_Wrap">
                        <h2>My best projects</h2>
                        
                    </div>
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(homeCodes.block7, 'text')}
                        
                    </div>
                </section>

                <GraphicSection id='code21' getId={currentId} next='code22' action={setId}>
                     
                     
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(homeCodes.block8, 'text')}
                    </div>
                </section>

                <GraphicSection id='code24' getId={currentId} next='code25' action={setId}>
                     
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(homeCodes.block9, 'text')}
                    </div>
                </section>

                <GraphicSection id='code26' getId={currentId} next='code27' action={setId}>
                    <div className="heroOne_Wrap contactSec">
                    <h1>Reach</h1>
                            <h1>me via</h1>
                        
                        <p>
                        You can reach me through the following   handles or send me a mail.
                        </p>
                        
                        <div className="socials">
                            <div className="socialBox">
                                <div className="boxSocial"></div>
                                <p><a href="http://" target="_blank" rel="noopener noreferrer">@hypedeveloper</a></p>
                            </div>

                            <div className="socialBox">
                                <div className="boxSocial"></div>
                                <p><a href="http://" target="_blank" rel="noopener noreferrer">de.hypedeveloper@gmail.com</a></p>
                            </div>
                        </div>

                        
                    </div>
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(homeCodes.block10, 'text')}
                    </div>
                </section>

            </main>

            <Footer id='code28' getId={currentId} action={setId}/>
        </>
    )
}