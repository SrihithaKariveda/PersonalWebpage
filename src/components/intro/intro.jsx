import './intro.scss'
import { init } from 'ityped'
import {KeyboardArrowDown} from "@material-ui/icons"
import { useEffect, useRef} from 'react'

export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { showCursor: false, backDelay: 1500,backSpeed:60,showCursor:true,strings: [' Hard working', ' Adventurous', ' Curious',' Smart',' Focused',' A team player', 'Goal-Oriented', 'Kind', 'Honest', 'A Leader', 'Caring', 'Dedicated', 'Peseverent'] })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                <img src="assets/Me.jpg" alt="" />

                </div>
            </div>
                <div className="right">
                <div className="wrapper">
                    <h2>Hi there! I'm</h2>
                    <h1>Srihitha Kariveda</h1>
                    <h3>A student who is ... <span ref={textRef}></span></h3>
                </div>
                <div className="itemContainer">
                        <h3>Scroll down to learn more (or click the menu option in the top right)</h3>
                        <KeyboardArrowDown style={{fontSize: 100}} />

                    </div>
                
            </div>
        </div>
    )
}
