import { useState } from "react"
import { contactsCodes } from "../components/util/codeBlocks"
import { Footer, GraphicSection, TypePropmt, TypeText } from "../components/tools"
import '../style/pages/about.css'
import '../style/pages/home.css'



export default function Contacts(){
    const [currentId, setId] = useState('code1')
    const [currentPropmt, setPropmt] = useState(null)


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

    
    return(
        <>
            <main>
                
            <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(contactsCodes.block1, 'text')}
                    </div>

                </section>


                <GraphicSection id='code4' getId={currentId} next='code5' action={setId}>
                    <div className="aboutWrap_Pitch">
                        <h2>let’s build that idea </h2>
                        <br />
                        <br />
                        <div className="contactHeader">
                            <h1>Reach</h1>
                            <h1>me via</h1>
                        </div>

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


                               

                        <p>
                        What are you wating for lets build that idea
                        </p>

                    </div>
                </GraphicSection>

                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(contactsCodes.block7, 'props')}
                        {TypeTexts(contactsCodes.block8, 'text')}
                    </div>

                </section>
            </main>

            <Footer id='code7' getId={currentId} action={setId}/>

        </>
    )
}