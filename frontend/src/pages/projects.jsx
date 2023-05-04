import '../style/pages/projects.css'
import { useEffect, useRef, useState } from "react";
import { Button, Footer, GraphicSection, TypePropmt, TypeText } from "../components/tools";
import { projectCodes } from "../components/util/codeBlocks.js";
import { Link } from 'react-router-dom';
import { myProjects } from '../components/util/projects';



export default function Projects() {

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

    const projects = myProjects.map((e) => {
        return (
            <>
                <div className="projectsCards_group">

                    <div className="projectWorks">
                        <div className="imgBox_project">
                            <div className="imgProj_wrap">
                                <div className="ref_imgs_project"></div>
                                <div className="ref_imgs_project"></div>
                                <div className="ref_imgs_project"></div>
                            </div>
                        </div>

                        <div className="fullInfo_work">
                            <div className="workInfo">
                                <h2>
                                    {e.name}
                                </h2>
                                <p>
                                    {e.short_description}
                                </p>

                            </div>

                            <div className="techUsed">
                                <p>Tech stack</p>
                                <br />
                                <div className="techStackWrap">
                                    <div className="techBox"></div>
                                    <div className="techBox"></div>
                                    <div className="techBox"></div>
                                </div>
                            </div>
                        </div>
                        <div className="techBttn">
                            <Link to={`${e.name.toLowerCase()}`}>
                                <Button text={'- View Project'} />
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <main>
                <section className="CodeBlock">
                    <div className="codeWrap">
                        {TypeTexts(projectCodes.block1, 'text')}
                    </div>
                </section>

                <GraphicSection id='code4' getId={currentId} next='prop1' action={setId}>
                    <div className="heroOne_Wrap">
                        <h1>My </h1>
                        <h1>Project</h1>
                        <br />

                        <div className="worksWrap">
                            {projects}
                        </div>

                    </div>
                </GraphicSection>
            </main>
        </>
    )
}