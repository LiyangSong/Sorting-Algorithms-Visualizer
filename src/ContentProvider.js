import { useState, useEffect, useReducer, useRef } from 'react';
import { useLocation } from "react-router-dom";
import DescriptionArea from './DescriptionArea.js';
import InputArea from './InputArea.js';
import LogArea from "./LogArea.js";
import AnimationArea from './AnimationArea.js';
import ButtonArea from "./ButtonArea.js";
import Footer from './Footer.js';
import reducer, { ACTION, initialState } from "./reducer.js";

/**
 * The main component containing description, input area, animation, buttons, footer, etc. of one type of sorting algorithm.
 * @author - Liyang, Yue
 * @param {string} sortType - The current sorting algorithm.
 * @returns {JSX.Element} - The rendered JSX Component.
 */
export default function ContentProvider({ sortType }) {

    // Apply 'useReducer' to provide method to update value of 'state'.
    // 'state' contains information like current status, current numbers, current log, etc. that can be useful to render related components.
    // Both initial state and dispatch are predefined in 'reducer.js'.
    const [state, dispatch] = useReducer(reducer, initialState);
    // Apply 'useRef' to initialize 'intervalRef' which refers to the time interval of auto-running animation.
    let intervalRef = useRef(null);

    // Apply 'useState' to initialize 'speed' which is the value of time interval of auto-running animation.
    // Default interval is 1000ms.
    const [speed, setSpeed] = useState(1000);
    // Set new 'speed' value according to user input.
    // The minimum value of input should mean the slowest animation
    // which means the biggest 'speed' value.
    const handleSpeedChange = (value) => setSpeed(1000 / value);

    // Call corresponding dispatch methods defined in reducer.js.
    const handleInputNumber = (id, inputNumber) => dispatch({
        type: ACTION.INPUTNUMBERS,
        id: id,
        inputNumber: inputNumber
    });
    const handleAddLength = () => dispatch({type: ACTION.ADDLENGTH});
    const handleReduceLength = () => dispatch({type: ACTION.REDUCELENGTH});
    const handleStartSorting = () => dispatch({type: ACTION.STARTSORTING});
    const handleStepForward = () => dispatch({type: ACTION.STEPFORWARD, sortType: sortType});
    const handleStepBackward = () => dispatch({type: ACTION.STEPBACKWARD, sortType: sortType});
    const handleAutoRun = () => dispatch({type: ACTION.AUTORUN});
    const handleJumpToStart = () => dispatch({type: ACTION.JUMPTOSTART});
    const handleJumpToComplete = () => dispatch({type: ACTION.JUMPTOCOMPLETE, sortType: sortType});

    /**
     * Function to check the key code and dispatch corresponding actions
     * @author - Yue, Liyang
     * @param {Object} event - The keyboard event with 'code' as one of its properties.
     */
    const handleKeyDown = (event) => {
        // In input area, press Enter key to start sorting.
        if (state.status === "input") {
            event.keyCode === 13 && handleStartSorting();
        }

        // In 'auto running' status, realize functions like start/pause, increase/decrease speed.
        if (state.status === "auto running") {
            switch (event.keyCode) {
                // Enter key
                case 13:
                    handleAutoRun();
                    break;
                // Space bar
                case 32:
                    handleAutoRun();
                    break;
                // Up arrow key
                case 38: {
                    const speedRatio = 1000 / speed;
                    // Speed ratio increases by 0.1 when less than 1 and increases by 0.5 when greate than 1.
                    let newSpeedRatio = speedRatio < 1 ? speedRatio + 0.1 : speedRatio < 4.5 ? speedRatio + 0.5 : 5;
                    handleSpeedChange(newSpeedRatio);
                    break;
                }
                // Down arrow key
                case 40: {
                    const speedRatio = 1000 / speed;
                    // Speed ratio decreases by 0.5 when greate than 1 and decreases by 0.1 when less than 1.
                    let newSpeedRatio = speedRatio > 1 ? speedRatio - 0.5 : speedRatio > 0.2 ? speedRatio - 0.1 : 0.1;
                    handleSpeedChange(newSpeedRatio);
                    break;
                }
            }
        }

        // In other status of animation,
        // realize functions like start/pause, step forward/backward, increase/decrease speed, jump to start/complete.
        if (["ready to run", "manually running", "pause", "complete"].includes(state.status)) {
            switch (event.keyCode) {
                // Enter key
                case 13:
                    handleAutoRun();
                    break;
                // Space bar
                case 32:
                    handleAutoRun();
                    break;
                // Left arrow key
                case 37:
                    handleStepBackward();
                    break;
                // Up arrow key
                case 38: {
                    const speedRatio = 1000 / speed;
                    // Speed ratio increases by 0.1 when less than 1 and increases by 0.5 when greate than 1.
                    let newSpeedRatio = speedRatio < 1 ? speedRatio + 0.1 : speedRatio < 4.5 ? speedRatio + 0.5 : 5;
                    handleSpeedChange(newSpeedRatio);
                    break;
                }
                // Right arrow key
                case 39:
                    handleStepForward();
                    break;
                // Down arrow key
                case 40: {
                    const speedRatio = 1000 / speed;
                    // Speed ratio decreases by 0.5 when greate than 1 and decreases by 0.1 when less than 1.
                    let newSpeedRatio = speedRatio > 1 ? speedRatio - 0.5 : speedRatio > 0.2 ? speedRatio - 0.1 : 0.1;
                    handleSpeedChange(newSpeedRatio);
                    break;
                }
            }
            // Shift + Left arrow key
            if (event.shiftKey && event.keyCode === 37) {
                handleJumpToStart();
            }
            // Shift + Right arrow key
            if (event.shiftKey && event.keyCode === 39) {
                handleJumpToComplete();
            }
        }
    };

    // When current route get changed or refreshed, dispatch the initialization of state to initialize all information.
    useEffect(() => {
        dispatch({
            type: ACTION.INITIALIZE
        })
    }, [useLocation()]);

    useEffect(() => {
        // When status changed to 'auto running', which means start button got clicked,
        // create a time interval with value of 'speed' to execute 'handleStepForward' at intervals.
        if (state.status === "auto running") {
            intervalRef.current = setInterval(handleStepForward, speed);
        }
        // When status changed to 'complete' or 'pause', which means pause button got clicked or algorithm reached final step,
        // clear the created time interval to end the auto execution of 'handleStepForward'.
        if (state.status === "complete" || state.status === "pause") {
            clearInterval(intervalRef.current);
        }
    }, [state.status]);

    // When 'speed' changed, clear current time interval and create a new one.
    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (state.status === "auto running") {
            intervalRef.current = setInterval(() => {
                handleStepForward();
            }, speed);
        }
    }, [speed])

    // Add event listener to respond to keyboard events to realize keyboard control.
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        // Clean up the event listener when the component unmounts.
        return () => document.removeEventListener('keydown', handleKeyDown);
    })

    return(
        <div className="contentProvider">
            {state.status === "input" ? (
                // When status is 'input', render description and input area.
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
                // When status is not 'input', render log, animation, and button area.
                <>
                    <LogArea log={state.log} />
                    <AnimationArea
                        currentNumbers={state.currentNumbers}
                    />
                    <ButtonArea
                        onAutoRun={handleAutoRun}
                        onStepForward={handleStepForward}
                        onStepBackward={handleStepBackward}
                        onJumpToStart={handleJumpToStart}
                        onJumpToComplete={handleJumpToComplete}
                        // Disable step forward and jump to complete button when status is 'auto running' or 'complete'
                        disableForward={state.status === "auto running" || state.status === "complete"}
                        // Disable step backward and jump to start button when status is 'auto running' or 'ready to run'
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