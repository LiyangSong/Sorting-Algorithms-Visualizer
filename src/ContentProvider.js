import { useEffect, useState, useReducer } from 'react';
import { useLocation } from "react-router-dom";
import DescriptionArea from './DescriptionArea.js';
import InputArea from './InputArea.js';
import LogArea from "./LogArea.js";
import AnimationArea from './AnimationArea.js';
import ButtonArea from "./ButtonArea.js";
import Footer from './Footer.js';
import numbersReducer from "./numbersReducer.js";

export default function ContentProvider({ sortType }) {
    const [status, setStatus] = useState("input"); //"input", "ready to run", "running", "complete"
    const [numbers, dispatch] = useReducer(numbersReducer, [
        {id: 1, number: null},
        {id: 2, number: null},
        {id: 3, number: null},
        {id: 4, number: null},
        {id: 5, number: null}
    ]);

    useEffect(() => {
        setStatus("input");
    }, [useLocation()]);

    function handleNumberChange(id, nextNumber) {
        dispatch({
            type: "changeNumber",
            id: id,
            nextNumber: nextNumber
        })
    }

    function handleAddLength() {
        dispatch({
            type: "addLength"
        })
    }

    function handleReduceLength() {
        dispatch({
            type: "reduceLength"
        })
    }

    return(
        <div className="contentProvider">
            {status === "input" ? (
                <>
                    <DescriptionArea sortType={sortType} />
                    <InputArea
                        numbers={numbers}
                        onStartSorting={() => setStatus("ready to run")}
                        onNumberChange={handleNumberChange}
                        onAddLength={handleAddLength}
                        onReduceLength={handleReduceLength}
                    />
                    <Footer />
                </>
            ) : (
                <>
                    <LogArea sortType={sortType} />
                    <AnimationArea
                        numbers={numbers} />
                    <ButtonArea />
                    <Footer />
                </>
            )}
        </div>
    )
}