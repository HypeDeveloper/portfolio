import { useState } from "react"
import { aboutCodes } from "../components/util/codeBlocks"
import { Footer, GraphicSection, TypePropmt, TypeText } from "../components/tools"

import '../style/responsive.css'
import '../style/pages/about.css'
import { testAction } from "../components/util/actions"

export default function About() {
    const [currentId, setId] = useState('code1')
    const [currentPropmt, setPropmt] = useState(null)

    const [propKey, setPropKey] = useState('')
    const commandArray = [
        {
            id: 'prop1',
            command: testAction
        }
    ]

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
                    <TypePropmt yBttnText={element.yBttn}
                        text={element.text} key={element.id} className={`propIn_${element.id}`} id={element.id} getId={currentId} nText={element.nText} action={setId}
                        yText={element.yText}  next={element.next} setP={setPropmt} currentP={currentPropmt}
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
                        {TypeTexts(aboutCodes.block1, 'text')}
                    </div>
                </section>

                <GraphicSection id='code4' getId={currentId} next='prop1' action={setId}>
                    <div className="aboutWrap">
                        <h2>hello, i am</h2>
                        <div className="aboutInfo">
                            <div className="topName" id="topName">
                                <h1 >
                                    David
                                </h1>
                            </div>
                            <div className="aboutInfo_bottom">
                                <h1>
                                    Ok<span className="grn"><h1>oo</h1></span>ye
                                </h1>
                            </div>
                        </div>
                        <p>
                            A <span className="keynotes grn">creative designer and Full Stack developer </span> based in Nigeria. My coding journey started fully  in High School, were I leant the basic programing languages like <span className="keynotes red">Python, JavaScript and C#</span>.
                              <br />                              <br />                                                        

                            Going further,  i <span className="keynotes yel">worked with FirstClassPilot as a junior Frontend developer </span>and during my stay their i honed my skills in <span className="keynotes grn">Backend dev and Ui / Ux designs</span>
                                <br />                                <br />                                                    

                            I am also open to for branding and full-stack web development
                        </p>
                    </div>
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(aboutCodes.block2, 'prop')}
                        {TypeTexts(aboutCodes.block3, 'text')}
                    </div>
                </section>

                <GraphicSection id='code6' getId={currentId} next='code7' action={setId}>
                     
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(aboutCodes.block4, 'text')}
                    </div>
                </section>

                <GraphicSection id='code8' getId={currentId} next='code9' action={setId}>
                    <div className="aboutWrap_Pitch">
                        <h2>Ok, lets get started.</h2>

                        <p>
                            I have an amazing skills set which i use to deliver   
                            top class products to my clients which are
                        </p>

                        <div className="skillBoxes">
                            <div className="wrapSkills">
                                <div className="skillBox"></div>
                                <div className="skillBox"></div>
                                <div className="skillBox"></div>
                                <div className="skillBox"></div>
                                <div className="skillBox"></div>
                                <div className="skillBox"></div>
                                <div className="skillBox"></div>
                                <div className="skillBox"></div>
                            </div>
                        </div>
                           br

                        <p>
                            And some of the projects i have worked on can testify to that
                        </p>

                    </div>
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(aboutCodes.block5, 'prop')}
                        {TypeTexts(aboutCodes.block6, 'text')}
                    </div>
                </section>

                <GraphicSection id='code11' getId={currentId} next='code12' action={setId}>
                    <div className="aboutWrap_Pitch">
                        <h2>Here are what my clients have
                            to say</h2>

                        <p>
                            After a job well done what's next testimonials
                        </p>





                        <h2>Finally,</h2>

                        <p>
                            I am confident that with the following skill set and ratings from   
                            my past clients i will be able to find a spot on your  
                            next gig
                        </p>

                    </div>
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(aboutCodes.block7, 'prop')}
                        {TypeTexts(aboutCodes.block8, 'text')}
                    </div>
                </section>


            </main>
            <Footer id='code14' getId={currentId} action={setId} />

        </>
    )
}