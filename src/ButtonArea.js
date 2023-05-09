import stepBackwardButton from './assets/backward.png';
import stepForwardButton from './assets/forward.png';
import startButton from './assets/play.png';
import pauseButton from './assets/pause.png';
import jumpToStart from './assets/fast-backward.png';
import jumpToComplete from './assets/fast-forward.png';

export default function ButtonArea({
    onAutoRun,
    onStepForward,
    onStepBackward,
    onJumpToStart,
    onJumpToComplete,
    disableForward,
    disableBackward,
    isAutoRunning,


}) {
    return(
        <div className="buttonArea">
            <button
                key="jumpToStart"
                onClick={onJumpToStart}
                disabled={disableBackward}
            >
                <img src={jumpToStart} alt="Jump To Start" />
            </button>
            <button
                key="stepBackward"
                onClick={onStepBackward}
                disabled={disableBackward}
            >
                <img src={stepBackwardButton} alt="Step Backward" />
            </button>
            <button key="startPause" onClick={onAutoRun}>
                {isAutoRunning?
                    <img src={pauseButton} alt="Pause Auto Run" /> :
                    <img src={startButton} alt="Start Auto Run" />
                }
            </button>
            <button
                key="stepForward"
                onClick={onStepForward}
                disabled={disableForward}
            >
                <img src={stepForwardButton} alt="Step Forward" />
            </button>
            <button
                key="jumpToComplete"
                onClick={onJumpToComplete}
                disabled={disableForward}
            >
                <img src={jumpToComplete} alt="Jump To Complete" />
            </button>
        </div>
    )
}