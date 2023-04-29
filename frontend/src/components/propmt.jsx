import '../style/components/propmt.css'
import LogoEye from './logo'
import { Button } from './tools'

export default function PropmtBlock(props){
    return(
        <>
            <section className='screen-full pin-fix propmtBox' style={{
                display: props.active ? 'flex' :'none'
            }}>
                <div className="wrapBox">
                    <div className="logoSection_pr">
                        <LogoEye zoom='50%'/>
                    </div>
                    <div className="propstext">
                        <h1>
                            {props.info.header}
                        </h1>
                        <p>
                            {props.info.text}
                        </p>
                    </div>
                    <div className="propsBttn center-flex">
                        <Button text='Confirm' action={props.onClick}/>
                    </div>
                </div>
            </section>
        </>
    )
} 