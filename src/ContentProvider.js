import { useState, useEffect, useReducer, useRef } from 'react';
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
    let intervalId = useRef(null);
    const [speed, setSpeed] = useState(1000);

    useEffect(() => {
        dispatch({
            type: ACTION.INITIALIZE
        })
    }, [useLocation()]);

    useEffect(() => {
        if (state.status === "auto running") {
            intervalId.current = setInterval(() => {
                handleStepForward();
            }, speed);
        }
        if (state.status === "complete" || state.status === "pause") {
            clearInterval(intervalId.current);
        }
    }, [state.status])

    useEffect(() => {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
        if (state.status === "auto running") {
            intervalId.current = setInterval(() => {
                handleStepForward();
            }, speed);
        }
    }, [speed])

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

    function handleAutoRun() {
        dispatch({
            type: ACTION.AUTORUN
        })
    }

    function handleJumpToStart() {
        dispatch({
            type: ACTION.JUMPTOSTART
        })
    }

    function handleJumpToComplete() {
        dispatch({
            type: ACTION.JUMPTOCOMPLETE,
            sortType: sortType
        })
    }

    function handleSpeedChange(value) {
        setSpeed(1000 / value);
    }

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
                        onAutoRun={handleAutoRun}
                        onStepForward={handleStepForward}
                        onStepBackward={handleStepBackward}
                        onJumpToStart={handleJumpToStart}
                        onJumpToComplete={handleJumpToComplete}
                        disableForward={state.status === "auto running" || state.status === "complete"}
                        disableBackward={state.status === "auto running" || state.status === "ready to run"}
                        isAutoRunning={state.status === "auto running"}
                        onSpeedChange={handleSpeedChange}
                        speed={speed}
                    />
                    <Footer />
                </>
            )}
        </div>
    )
}