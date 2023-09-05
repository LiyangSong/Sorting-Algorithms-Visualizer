import stepBackwardButton from '../assets/backward.svg';
import stepForwardButton from '../assets/forward.svg';
import startButton from '../assets/play.svg';
import pauseButton from '../assets/pause.svg';
import jumpToStart from '../assets/fast-backward.svg';
import jumpToComplete from '../assets/fast-forward.svg';

/**
 * The component containing control buttons of animation.
 * Button functions are predefined and passed down from 'ContentProvider.jsx'.
 * @author - Liyang
 * @param {function} onAutoRun - The function triggered by clicking start/pause button.
 * @param {function} onStepForward - The function triggered by clicking step forward button.
 * @param {function} onStepBackward - The function triggered by clicking step backward button.
 * @param {function} onJumpToStart - The function triggered by clicking jump to start button.
 * @param {function} onJumpToComplete - The function triggered by clicking jump to complete button.
 * @param {boolean} disableForward - The logic to determine when step forward button and jump to complete button should be disabled.
 * @param {boolean} disableBackward - The logic to determine when step backward button and jump to start button should be disabled.
 * @param {boolean} isAutoRunning - The logic to determine whether current status is 'auto running' and change appearance of start/pause button accordingly.
 * @param {function} onSpeedChange - The function triggered by dragging speed slider.
 * @param {number} speed - The current time interval of auto-running animation.
 * @returns {JSX.Element} - The rendered JSX Component.
 */
export default function ButtonArea({
    onAutoRun,
    onStepForward,
    onStepBackward,
    onJumpToStart,
    onJumpToComplete,
    disableForward,
    disableBackward,
    isAutoRunning,
    onSpeedChange,
    speed
}) {
    return(
        <div className="buttonArea">
            <button
                key="jumpToStart"
                onClick={onJumpToStart}
                disabled={disableBackward}
                title="Jump to Start (Shift+←)"
            >
                <img src={jumpToStart} alt="Jump To Start" />
            </button>
            <button
                key="stepBackward"
                onClick={onStepBackward}
                disabled={disableBackward}
                title="Step Backward (←)"
            >
                <img src={stepBackwardButton} alt="Step Backward" />
            </button>
            <button key="startPause" onClick={onAutoRun} >
                {/* Change the appearance of start/pause button according to current status */}
                {isAutoRunning?
                    <img src={pauseButton} alt="Pause Auto Run" title="Pause Auto Run (Enter/Space)" /> :
                    <img src={startButton} alt="Start Auto Run" title="Start Auto Run (Enter/Space)" />
                }
            </button>
            <button
                key="stepForward"
                onClick={onStepForward}
                disabled={disableForward}
                title="Step Forward (→)"
            >
                <img src={stepForwardButton} alt="Step Forward" />
            </button>
            <button
                key="jumpToComplete"
                onClick={onJumpToComplete}
                disabled={disableForward}
                title="Jump to Complete (Shift+→)"
            >
                <img src={jumpToComplete} alt="Jump To Complete" />
            </button>
            <input
                type="range"
                id="speed"
                min="0.1"
                max="5"
                step="0.1"
                // The minimum value of input should mean the slowest animation
                // which means the biggest 'speed' value.
                value={1000 / speed}
                onChange={(e) => onSpeedChange(e.target.value)}
                title="Change Speed of Auto Run (↑/↓)"
            />
            <div>{(1000 / speed).toFixed(1)}x</div>
        </div>
    )
}