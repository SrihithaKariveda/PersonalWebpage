import './portfolio.scss'
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import {
    clubs,research,languages,fun
} from "../../data";

export default function Portfolio() {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    const list = [
        {
            id: "clubs",
            title: "Clubs",
        },
        {
            id: "research",
            title: "Research",
        },
        {
            id: "languages",
            title: "Programming Languages",
        },
        {
            id: "fun",
            title: "Activities",
        },
    ];
    useEffect(()=>{
        switch(selected){
            case "clubs":
            setData(clubs);
            break;
            case "research":
            setData(research);
            break;
            case "languages":
            setData(languages);
            break;
            case "fun":
            setData(fun);
            break;
            default:
                setData(clubs);

        }
    },[selected]
    )
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
            <div className="item">
                <img src={d.img}
                alt=""/>
                <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    );
}
