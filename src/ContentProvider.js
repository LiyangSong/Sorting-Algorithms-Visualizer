import { useEffect, useState, useReducer } from 'react';
import { useLocation } from "react-router-dom";
import DescriptionArea from './DescriptionArea.js';
import InputArea from './InputArea.js';
import LogArea from "./LogArea.js";
import AnimationArea from './AnimationArea.js';
import ButtonArea from "./ButtonArea.js";
import Footer from './Footer.js';
import numbersReducer from "./numbersReducer.js";

export const initialNumbers = [
    {id: 1, number: null, isActive: false, isOrdered: false},
    {id: 2, number: null, isActive: false, isOrdered: false},
    {id: 3, number: null, isActive: false, isOrdered: false},
    {id: 4, number: null, isActive: false, isOrdered: false},
    {id: 5, number: null, isActive: false, isOrdered: false}
]

export default function ContentProvider({ sortType }) {
    const [status, setStatus] = useState("input"); //"input", "ready to run", "running", "complete"
    const [numbers, dispatch] = useReducer(numbersReducer, initialNumbers);
    const [step, setStep] = useState(0);

    useEffect(() => {
        setStatus("input");
        dispatch({
            type: "initialize"
        })
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

    function handleStepForward() {
        if (numbers.any(number => number.isOrdered === false)) {
            setStep(step + 1)
        }
        dispatch({
            type: "sortSteps",
            sortType: sortType,
            step: step
        })
    }

    function handleStepBackward() {
        if (step > 0) {
            setStep(step - 1);
        }
        dispatch({
            type: "sortSteps",
            sortType: sortType,
            step: step
        })
    }

    function handleStartPause() {
        if (status !== "running") {
            setStatus("running")
        } else {
            setStatus("ready to run")
        }
    }

    while (status === "running" && numbers.any(number => number.isOrdered === false)) {
        setStep(step + 1)
        dispatch({
            type: "sortSteps",
            sortType: sortType,
            step: step
        })
    }

    while (numbers.every(number => number.isOrdered)) {
        setStatus("complete")
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
                    <ButtonArea
                        onStartPause={handleStartPause}
                        onStepForward={handleStepForward}
                        onStepBackWard={handleStepBackward}/>
                    <Footer />
                </>
            )}
        </div>
    )
}