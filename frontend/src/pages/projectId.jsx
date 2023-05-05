import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Footer, GraphicSection, TypePropmt, TypeText } from "../components/tools";
import { myProjects } from "../components/util/projects";
import { projectIdCodes } from "../components/util/codeBlocks";
import '../style/pages/projects.css'


export function ProjectId(){
    const [currentId, setId] = useState('code1')
    const [currentPropmt, setPropmt] = useState(null)
    const [getData, setData]= useState({})
    const getUrlId = useParams()
    const nav = useNavigate()
    
    useEffect(()=>{
        myProjects.forEach(e=>{
            if(e.name.toLocaleLowerCase() === getUrlId.id ){
                setData(e)
            }
            else{
                console.log('no record');
                nav('/404')
            }
        })
    },[])
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
            <Outlet/>
            <main>
                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(projectIdCodes.block1, 'text')}
                    </div>
                </section>


                <GraphicSection id='code2' getId={currentId} next='code3' action={setId}>
                    <div className="heroOne_Wrap">
                        <h1>
                            {getData.name}
                        </h1>
                        <p>
                            {getData.long_description}
                        </p>
                        <div className="techUsed">
                                <br />
                                <br />
                                <br />
                                <div className="techStackWrap">
                                    <div className="techBox"></div>
                                    <div className="techBox"></div>
                                    <div className="techBox"></div>
                                </div>
                            </div>
                        <div className="fullImage">
                            <div className="linktoSite"></div>
                        </div>
                    </div>
                </GraphicSection>


                
            </main>
            <Footer id='code3' getId={currentId} action={setId}/>
        </>
    )
}