import { useEffect, useReducer } from 'react';
import { useLocation } from "react-router-dom";
import DescriptionArea from './DescriptionArea.js';
import InputArea from './InputArea.js';
import LogArea from "./LogArea.js";
import AnimationArea from './AnimationArea.js';
import ButtonArea from "./ButtonArea.js";
import Footer from './Footer.js';
import reducer, { ACTION, initialState } from "./reducer.js";

export default function ContentProvider({ sortType }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    useEffect(() => {
        dispatch({
            type: ACTION.INITIALIZE
        })
    }, [useLocation()]);

    // useEffect(() => {
    //     if (status === "ready to run") {
    //         setStartNumbers([...numbers]);
    //     }
    //     if (status === "running" && numbers.some(number => number.isSorted === false)) {
    //         setStep(prevStep => prevStep + 1);
    //     }
    //     if (numbers.every(number => number.isSorted)) {
    //         setStatus("complete");
    //     }
    // }, [numbers, status])
    //
    // useEffect(() => {
    //     if (status === "running" || status === "manually running") {
    //         dispatchNumbers({
    //             type: "sortSteps",
    //             sortType: sortType,
    //             step: step
    //         })
    //     }
    // }, [step])

    function handleInputNumber(id, inputNumber) {
        dispatch({
            type: ACTION.INPUTNUMBERS,
            id: id,
            inputNumber: inputNumber
        })
    }

    function handleAddLength() {
        dispatch({
            type: ACTION.ADDLENGTH
        })
    }

    function handleReduceLength() {
        dispatch({
            type: ACTION.REDUCELENGTH
        })
    }

    function handleStartSorting() {
        dispatch({
            type: ACTION.STARTSORTING
        });
    }

    function handleStepForward() {
        dispatch({
            type: ACTION.STEPFORWARD,
            sortType: sortType
        })
    }

    function handleStepBackward() {
        dispatch({
            type: ACTION.STEPBACKWARD,
            sortType: sortType
        })
    }

    // function handleStartPause() {
    //     if (status !== "running") {
    //         setStatus("running")
    //     } else {
    //         setStatus("manually running")
    //     }
    // }


    return(
        <div className="contentProvider">
            {state.status === "input" ? (
                <>
                    <DescriptionArea sortType={sortType} />
                    <InputArea
                        currentNumbers={state.currentNumbers}
                        onStartSorting={handleStartSorting}
                        onInputNumber={handleInputNumber}
                        onAddLength={handleAddLength}
                        onReduceLength={handleReduceLength}
                    />
                    <Footer />
                </>
            ) : (
                <>
                    <LogArea log={state.log} />
                    <AnimationArea
                        currentNumbers={state.currentNumbers} />
                    <ButtonArea
                        onStepForward={handleStepForward}
                        onStepBackward={handleStepBackward}/>
                    <Footer />
                </>
            )}
        </div>
    )
}