import { gsap } from "gsap";
import { useEffect } from "react"

// gsap.registerPlugin(RoughEase);

export default function LogoEye(props){
    useEffect(()=>{
        if(props.action === 'none'){
            return
        }
        if(props.action === 'blink'){
            Blink()
        }
    }, [])

    function Blink(){
        let master =  gsap.timeline();
        master.add(eyeRight)
              .add(eyeLeft)  


        var eyeRight = gsap.timeline(
            { 
                repeat: 2, 
                defaults: {duration: .2, ease: "steps(3)"} 
            }
        );
        eyeRight.to("#eyeRight", {height: 60});
        eyeRight.to("#eyeRight", {height: 20});
        eyeRight.to("#eyeRight", {height: 60});

        // eyeRight.to("#eyeRight", {height: 60, duration: 0.5});



        var eyeLeft = gsap.timeline(
            { 
                repeat: 2, 
                defaults: {duration: .2, ease: "steps(3)"} 
            }
        );
        eyeLeft.to("#eyeLeft", {height: 60});
        eyeLeft.to("#eyeLeft", {height: 20});
        eyeLeft.to("#eyeLeft", {height: 60});

        return master;
    }

    

    return(
        <>
            <div className="logoEye_group" style={{
                zoom: props.zoom,
                background: props.bg
            }}>
                <div className="eyeRight" >
                    <div className="eye" id="eyeRight"></div>
                </div>
                <div className="eyeLeft" >
                    <div className="eye" id="eyeLeft"></div>
                </div>
            </div>
        </>
    )
}

