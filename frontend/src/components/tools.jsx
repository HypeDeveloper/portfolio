import Typist from "./util/Typist"
import { useEffect, useRef, useState } from "react";

let currentPropmt_Man = null

export function Button(props) {
    return (
        <>
            <button onClick={props.action}>
                {props.text}
            </button>
        </>
    )
}

export function TypeText(props) {
    const { action, next, getId, id, text } = props

    const textBox = useRef()
    const codes = useRef()
    useEffect(() => {
        const type = new Typist({
            targetId: id,
            typeSpeed: 30,
            delSpeed: 80,
            cursorString: "_",
            cusourClass: "cusourClass",
            loop: false,
            onEnd: () => endCallback()

        });

        if (codes.current.children.length < 1) {
            type.text = text
            if (id == getId) {
                textBox.current.style.display = 'flex'
                textBox.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                type.start()
            }
        }

        function endCallback() {
            if (action) {
                action(next)
                type.hideCursor()
                currentPropmt_Man = next
            } else {
                console.log('list done');
            }

        }

    }, [getId])

    return (
        <>
            <div className="textBox" ref={textBox}>
                <div className="box_TextBox">
                    <div className="dotCount"></div>
                    <div className="textType">
                        <code id={props.id} ref={codes}></code>
                    </div>
                </div>
            </div>
        </>
    )
}

export function TypePropmt(props) {
    const { propAction, yBttnText, action, setP, text, getId, id, currentP, handleAlert, yText, nText, next, pressed } = props

    const textBox = useRef()
    const codes = useRef()
    const coText = useRef()
    const pBttn = useRef()
    const nBttn = useRef()
    useEffect(() => {

        setP(id)
        const type = new Typist({
            targetId: id,
            typeSpeed: 80,
            delSpeed: 80,
            cursorString: "_",
            cusourClass: "cusourClass",
            loop: false,
            onEnd: () => listenForKeys()

        });

        if (codes.current.children.length < 1) {
            type.text = text
            if (id == getId) {
                textBox.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                textBox.current.style.display = 'block'
                type.start()
            }
        }

        function listenForKeys() {
            pBttn.current.onclick = (e)=>{
                if (handleAlert) {
                    handleAlert.openAction()
                    handleAlert.textActions({
                        header: handleAlert.header,
                        text: handleAlert.text
                    })
                }
                coText.current.innerText = yText
                endCallback()
            }
            nBttn.current.onclick = (e)=>{
                coText.current.innerText = nText
                endCallback()
            }

            window.onkeydown = (e) => {
                if (currentPropmt_Man === id) {
                    if (e.key == 'y') {
                        if (handleAlert) {
                            handleAlert.openAction()
                            handleAlert.textActions({
                                header: handleAlert.header,
                                text: handleAlert.text
                            })
                        }
                        coText.current.innerText = yText
                        propAction()
                        endCallback()
                    } else {
                        if (e.key == 'n') {
                            coText.current.innerText = nText
                            endCallback()
                        }
                        else {
                            coText.current.innerText = "Wrong Key"
                        }
                    }
                }
            }

        }

        function endCallback() {
            if (action) {
                action(next)
                type.hideCursor()
                currentPropmt_Man = next
                console.log(currentPropmt_Man)
            } else {
                console.log('list done');
            }

        }

    }, [getId])

    return (
        <>
        <div className="tmainPr" ref={textBox}>
            
        <div className="textBoxProp">
                <div className="box_TextBox">
                    <div className="dotCount"></div>
                    <div className="textType">
                        <code id={props.id} ref={codes}></code>
                    </div>
                </div>
                
                <div className="completBox">
                    <i><p ref={coText}></p></i>
                </div>
                
            </div>
            
            <div className="pbuton">
                    <div className="bttnwrap_Prop">
                        <div className="bttnsProps" ref={pBttn} onClick={propAction}>
                            <p>{yBttnText}</p>
                        </div>
                        <div className="bttnsProps" ref={nBttn}>
                            <p>No</p>
                        </div>
                    </div>

                </div>
        </div>

        </>
    )
}

export function GraphicSection(props) {
    const { children, next, action, getId, id, className } = props
    const graphSec = useRef()
    useEffect(() => {
        if (id == getId) {
            graphSec.current.style.display = 'flex'
            // graphSec.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

            endCallback()
        }
    }, [getId])


    function endCallback() {
        if (action) {
            action(next)
            currentPropmt_Man = next
        }
        else {
            console.log('list done')
        }
    }

    return (
        <>
            <section className={`graphSec ${className}`} ref={graphSec}>
                <div className="grapicLine"></div>
                {children ? children : (
                    <>
                        <br />
                        <br />
                        <br />
                    </>
                )}
            </section>
        </>
    )
}


export function typeTab() {
    return (syntax('red', ' ') + syntax('red', ' ') + syntax('red', ' ') + syntax('red', ' ') + syntax('red', ' ') + syntax('red', ' '))
}
export function syntax(className, text) {
    return (
        `~<span class='${className}'>${text}</span>~`
    )
}

export function Footer(props) {
    const { next, action, getId, id } = props
    const graphSec = useRef()
    useEffect(() => {
        if (id == getId) {
            graphSec.current.style.display = 'flex'
            // graphSec.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

            endCallback()
        }
    }, [getId])


    function endCallback() {
        if (action) {
            action(next)
            currentPropmt_Man = next
        }
        else {
            console.log('list done')
        }
    }
    return (
        <footer>
            <div id={id} className="footerWrap" ref={graphSec}>
                <p>@HypeDeveloper</p>
                <p>2023</p>
            </div>
        </footer>
    )
}


import '../style/components/tools.css'

export function GridDots() {
    const gridParent = useRef()

    const colorList = [
        '#FF005C', '#FF7223', '#FFCA42', '#C342FF', '#5CFF42', '#7DE8FF'
    ]

    function createDots() {
        let dots = document.createElement('div')
        let innerDot = document.createElement('div')

        dots.className = 'dots_grid'
        innerDot.className = 'dots_grid_main'
        innerDot.style.opacity = 0.2

        dots.append(innerDot)

        dots.addEventListener('mouseenter', () => {
            innerDot.style.background = colorList[Math.floor(Math.random() * 6)]
            innerDot.style.opacity = 1
            innerDot.style.height = '8px'
            innerDot.style.width = '8px'

            setTimeout(() => {
                innerDot.style.background = 'white'
                innerDot.style.height = '3.5px'
                innerDot.style.width = '3.5px'

                innerDot.style.opacity = 0.2
            }, 2000)
        })
        gridParent.current.append(dots)
    }

    useEffect(() => {
        for (let i = 0; i < 300; i++) {
            createDots()
        }
    }, [])

    return (
        <div className="gridHolder" ref={gridParent}>

        </div>
    )
}


export function PropButton() {

    return (
        <>

        </>
    )
}