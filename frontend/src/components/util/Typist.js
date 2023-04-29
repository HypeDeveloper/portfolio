export default class Typist {
    constructor(options) {
        this.text = "";
        this.options = options || {
            targetId: "",
            typeSpeed: 150,
            delSpeed: 800,
            cusourClass: null,
            loop: false,
            cursorString: "|",
            onEnd: ()=>{},
        };
        this.targetArea = document.getElementById(this.options.targetId);
        this.cursorElement = document.createElement("span");
    }

    start() {
        
        let TextIndex = 0;
        let CharCount = 0;

        let splitText = this.text.split("~");

        let speed = this.options.typeSpeed;

        const textSection = document.createElement("div");
        textSection.style.display = "flex";
        textSection.style.flexWrap = "wrap";
        this.targetArea.appendChild(textSection);

        var textInter = setInterval(() => {
            if (TextIndex < splitText.length) {
                if (splitText[TextIndex].includes("de[")) {
                    speed = this.options.delSpeed || 400;
                    let getCommand = splitText[TextIndex].split("de[");
                    let getCount = getCommand[1].split(`]`);

                    if (CharCount < parseInt(getCount[0])) {
                        // CreateNodes

                        textSection.removeChild(textSection.lastChild);
                        
                        CharCount += 1;
                        return;
                    }
                    TextIndex += 1;
                    CharCount = 0;
                    speed = this.options.typeSpeed || 200;
                    return;
                }

                if (!splitText[TextIndex].includes("span")) {
                    let getText = splitText[TextIndex].split("");

                    if (CharCount < getText.length) {
                        // CreateNodes
                        let textWrap = document.createElement("pre");
                        textWrap.innerText = getText[CharCount];
                        textSection.appendChild(textWrap);

                        CharCount += 1;
                        return;
                    }
                    TextIndex += 1;
                    CharCount = 0;
                    return;
                }

                if (splitText[TextIndex].includes("span")) {
                    const deNode = splitText[TextIndex].split(`</span>`)[0]
                        .split(`<span class='`)[1]
                        .split(`'>`);

                    const getClasses = deNode[0];
                    const getText = deNode[1];

                    if (CharCount < getText.length) {
                        // CreateNodes
                        let textWrap = document.createElement("pre");
                        textWrap.className = getClasses;
                        textWrap.innerText = getText[CharCount];
                        textSection.appendChild(textWrap);

                        CharCount += 1;
                        return;
                    }
                    TextIndex += 1;
                    CharCount = 0;
                    return;
                }
                return;
            } else {
                if (!this.options.loop) {
                    clearInterval(textInter);
                    if(this.options.onEnd != null){
                        this.options.onEnd()
                    }
                } else {
                    CharCount = 0;
                    speed = this.options.delSpeed || 400;

                    const getLength = textSection.innerText.split("").length;
                   
                    if (CharCount < getLength) {
                        textSection.removeChild(textSection.lastChild);
                        CharCount += 1;
                        return;
                    }
                    TextIndex = 0;
                    CharCount = 0;
                    speed = this.options.typeSpeed || 200;
                    return;
                }
                    
            }
        }, speed);

        this.targetArea.appendChild(this.cursorElement);

        this.cursorElement.innerText = this.options.cursorString || "|";
        this.cursorElement.className = this.options.cusourClass;
    }

    hideCursor() {
        this.cursorElement.style.display  = 'none'
    }
    showCursor() {
        this.cursorElement.style.display  = 'block'
    }
}


// use de[delete this text] to delete