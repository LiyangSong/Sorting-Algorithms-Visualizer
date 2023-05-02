import { useEffect, useState } from 'react';
import DescriptionArea from './DescriptionArea.js';
import InputArea from './InputArea.js';
import LogArea from "./LogArea.js";
import AnimationArea from './AnimationArea.js';
import ButtonArea from "./ButtonArea.js";
import Footer from './Footer.js';
import {useLocation} from "react-router-dom";

export default function ContentProvider({ sortType }) {
    const [status, setStatus] = useState("input") //"input", "ready to run", "running", "complete"

    useEffect(() => {
        setStatus("input")
    }, [useLocation()]);

    function onStartSorting() {
        setStatus("ready to run")
    }

    if (status === "input") {
        return(
            <div className="contentProvider">
                <DescriptionArea sortType={sortType} />
                <InputArea onStartSorting={onStartSorting}/>
                <Footer />
            </div>
        )
    } else {
        return(
            <div className="contentProvider">
                <LogArea sortType={sortType} />
                <AnimationArea sortType={sortType} />
                <ButtonArea />
                <Footer />
            </div>
        )
    }
}