import { useEffect, useRef, useState } from 'react'

// style
import '../style/components/loading.css'

// image
import logo from '../assets/images/logo.png'
import LogoEye from './logo'
import { gsap } from 'gsap'

export function MainLoading() {
    const main = useRef()
    const loadNum = useRef()

    const [loadCount, setLoadCount] = useState(false)

    const s = '1001'
    useEffect(() => {
        let intervals = -1
        const interval = setInterval(() => {
            loadNum.current.innerText = loadNum.current.innerText.split('').
                map((letter, index) => {
                    if (index >= intervals) {
                        return (
                            Math.floor(Math.random() * 9)
                        )
                    } else {
                        return s[index]
                    }
                }).
                join('')

            if (intervals > s.length) {
                gsap.to(".loadingNumber", {
                    y: 100, duration: 0.8, display: 'none', onComplete: () => {
                        setLoadCount(true)
                    }
                });
                clearInterval(interval)
            }

            intervals += 0.05
        }, 50)



    }, [])

    return (
        <>
            <section ref={main} className=' screen-full pin-fix loading_hero'>

                {loadCount ? <LogoEye zoom='80%' action='blink' /> : (
                    <div className="loadcountWrap">
                        <h2 className="loadingNumber" ref={loadNum}>
                            0000
                        </h2>
                    </div>
                )}


            </section>
        </>
    )
}