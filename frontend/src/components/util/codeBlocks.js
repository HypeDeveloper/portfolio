import { syntax, typeTab } from "../tools";

export const homeCodes = {
    block1: [
        {
            text: syntax('red', ' import ') + syntax('grn', ' hypeDev ') + syntax('red', ' from ') + syntax('yel', ' "hype" '),
            id: 'code1',
            next: 'code2',
        },
        {
            text: syntax('red', ' let ') + syntax('grn', ' intro ') + '=' + syntax('yel', ' hypeDev') + '.' + syntax('grn', 'greet') + syntax('blu', '(') + syntax('blu', ')'),
            id: 'code2',
            next: 'code3',
        },
        {
            text: syntax('yel', ' hypeDev') + '.' + syntax('grn', 'webBuild') + syntax('blu', '(') + syntax('grn', ' intro ') + syntax('blu', ')'),
            id: 'code3',
            next: 'code4',
        },
    ],
    block2: [
        {
            text: syntax('pur', ' >> ') + syntax('grn', 'Download resume ') + syntax('opp',' y(yes) n(no)'),
            id: 'prop1',
            next: 'code5',
            yText: 'Hope To Hear from you soon 😊✨',
            nText: 'Ok i am still open for gigs',
        }
    ],
    block3: [
        {
            text: syntax('pur', '>> ') + syntax('grn', ' Done '),
            id: 'code5',
            next: 'code6',
        }
    ],
    block4: [
        {
            text: syntax('red', ' let ') + syntax('grn', ' data ') + '=' + syntax('yel', ' hypeDev') + '.' + syntax('grn', 'projects') + syntax('blu', '(') + syntax('blu', ')'),
            id: 'code7',
            next: 'code8',
        },
        {
            text: syntax('red', ' let ') + syntax('grn', ' myData ') + '=' + syntax('yel', ' data') + '.' + syntax('grn', 'map') + syntax('blu', '(') + syntax('blu', 'e') + syntax('pur', '=>') + syntax('org', '{')  ,
            id: 'code8',
            next: 'code9',
        },
        {
            text:  typeTab() + syntax('red', 'return') + syntax('grn', '('),
            id: 'code9',
            next: 'code10',
        },
        {
            text:  typeTab() + typeTab() + typeTab() + syntax('yel', 'hypeDev') + '.' + syntax('grn', 'weBuild') + syntax('blu', '(') + syntax('pur', 'e') + syntax('blu', ')'),
            id: 'code10',
            next: 'code11',
        },
        {
            text:  typeTab() + syntax('grn', ')'),
            id: 'code11',
            next: 'code12',
        },
        {
            text: syntax('org', '} ') + syntax('blu', ' ) '),
            id: 'code12',
            next: 'code13',
        },
    ],
    loading1: [
        {
            text: syntax('pur', '>> ') + syntax('grn', ' Building project template ') + '......~de[3]~10%~de[3]~20%~de[3]~70%' ,
            id: 'code14',
            next: 'code15',
        }
    ],
    block5:[
        {
            text: syntax('pur', '>> ') + syntax('red', ' Warning Origin : some of this project are out of this world'), 
            id: 'code16',
            next: 'code17',
        }
    ],
    block6:[
        {
            text: syntax('pur', '>> ') + syntax('grn', ' Wish to procced ') + syntax('opp', 'y(yes) n(No)'), 
            id: 'code17',
            next: 'code18',
            yText: 'Ok, lets get started 🎉😎',
            nText: 'Nah you hav to see this 😜😋',
        }
    ],
    loading2: [
        {
            text: syntax('pur', '>> ') + syntax('grn', ' Building project template ') + '......~de[3]~75%~de[3]~86%~de[3]~90%~de[3]~100%' , 
            id: 'code18',
            next: 'code19',
        }
    ],
    block7: [
        {
            text: syntax('pur', '>> ') + syntax('grn', ' Done '),
            id: 'code20',
            next: 'code21',
        }
    ],
    block8: [
        {
            text: syntax('pur', '>> ') + syntax('yel', ' hypeDev') + '.' + syntax('grn', 'generateContacts') + syntax('blu', '(') + syntax('blu', ')'),
            id: 'code22',
            next: 'code23',
        },
        {
            text: syntax('pur', '>> ') + syntax('yel', ' hypeDev') + '.' + syntax('grn', 'generateFooter') + syntax('blu', '(') + syntax('blu', ')'),
            id: 'code23',
            next: 'code24',
        }
    ],
    block9: [
        {
            text: syntax('pur', '>> ') + syntax('grn', ' Building project template ') + '......~de[3]~10%~de[3]~20%~de[3]~70%~de[3]~75%~de[3]~86%~de[3]~90%~de[3]~100%' , 
            id: 'code25',
            next: 'code26',
        }
    ],
    block10: [
        {
            text: syntax('pur', '>> ') + syntax('grn', ' Done'), 
            id: 'code27',
            next: 'code28',
        }
    ],
}


export const aboutCodes = {
    block1: [
        {
            text: syntax('red', ' import ') + syntax('grn', ' hypeDev ') + syntax('red', ' from ') + syntax('yel', ' "hype" '),
            id: 'code1',
            next: 'code2',
        },
        {
            text: syntax('red', ' let ') + syntax('grn', ' about ') + '=' + syntax('yel', ' hypeDev') + '.' + syntax('grn', 'getAbout') + syntax('blu', '(') + syntax('blu', ')'),
            id: 'code2',
            next: 'code3',
        },
        {
            text: syntax('yel', ' hypeDev') + '.' + syntax('grn', 'webBuild') + syntax('blu', '(') + syntax('grn', ' about ') + syntax('blu', ')'),
            id: 'code3',
            next: 'code4',
        },
    ],
    block2: [
        {
            text: syntax('pur', ' >> ') + syntax('grn', 'Download resume ') + syntax('opp',' y(yes) n(no)'),
            id: 'prop1',
            next: 'code5',
            yText: 'Hope To Hear from you soon 😊✨',
            nText: 'Ok i am still open for gigs',
        }
    ],
    block3: [
        {
            text: syntax('pur', '>> ') + syntax('grn', ' Done '),
            id: 'code5',
            next: 'code6',
        }
    ],
    block4: [
        {
            text: syntax('yel', ' hypeDev') + '.' + syntax('grn', 'generatePitch') + syntax('blu', '(') + syntax('blu', ')'),
            id: 'code7',
            next: 'code8',
        }
    ],
    block5: [
        {
            text: syntax('pur', ' >> ') + syntax('yel', 'Hey!! Seeing is Believing ') + syntax('opp',' y(View Projects) n(Leter)'),
            id: 'code9',
            next: 'code10',
            yText: 'Opening Projects ---',
            nText: 'You are really missing out 😱😱',
        }
    ],
    block6: [
        {
            text: syntax('pur', '>> ') + syntax('grn', ' Going Further '),
            id: 'code10',
            next: 'code11',
        }
    ],
    block7: [
        {
            text: syntax('pur', ' >> ') + syntax('yel', 'Reach out to David ') + syntax('opp',' y(Yiew Contacts) n(Later)'),
            id: 'code12',
            next: 'code13',
            yText: 'Opening Projects ---',
            nText: 'You are really missing out 😱😱',
        }
    ],
    block8: [
        {
            text: syntax('pur', '>> ') + syntax('grn', 'Done'),
            id: 'code13',
            next: 'code14',
        }
    ],
}



export const contactsCodes = {
    block1: [
        {
            text: syntax('red', ' import ') + syntax('grn', ' hypeDev ') + syntax('red', ' from ') + syntax('yel', ' "hype" '),
            id: 'code1',
            next: 'code2',
        },
        {
            text: syntax('red', ' let ') + syntax('grn', ' contacts ') + '=' + syntax('yel', ' hypeDev') + '.' + syntax('grn', 'getContacts') + syntax('blu', '(') + syntax('blu', ')'),
            id: 'code2',
            next: 'code3',
        },
        {
            text: syntax('yel', ' hypeDev') + '.' + syntax('grn', 'webBuild') + syntax('blu', '(') + syntax('grn', ' contacts ') + syntax('blu', ')'),
            id: 'code3',
            next: 'code4',
        },
    ],
    block7: [
        {
            text: syntax('pur', ' >> ') + syntax('yel', 'Download my Resume') + syntax('opp',' y(Yiew Contacts) n(Later)'),
            id: 'code5',
            next: 'code6',
            yText: 'Opening Projects ---',
            nText: 'You are really missing out 😱😱',
        }
    ],
    block8: [
        {
            text: syntax('pur', '>> ') + syntax('grn', 'Done'),
            id: 'code6',
            next: 'code7',
        }
    ],
}


export const projectCodes = {
    block1: [
        {
            text: syntax('red', ' import ') + syntax('grn', ' hypeDev ') + syntax('red', ' from ') + syntax('yel', ' "hype" '),
            id: 'code1',
            next: 'code2',
        },
        {
            text: syntax('red', ' let ') + syntax('grn', ' myWork ') + '=' + syntax('yel', ' hypeDev') + '.' + syntax('grn', 'project') + syntax('blu', '(') + syntax('blu', ')'),
            id: 'code2',
            next: 'code3',
        },
        {
            text: syntax('yel', ' hypeDev') + '.' + syntax('grn', 'webBuild') + syntax('blu', '(') + syntax('grn', ' myWork ') + syntax('blu', ')'),
            id: 'code3',
            next: 'code4',
        },
    ]
}