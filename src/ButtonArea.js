export default function ButtonArea({
    onStartPause,
    onStepForward,
    onStepBackWard
}) {
    return(
        <div className="buttonArea">
            <button key="startPause" onClick={onStartPause}>▶/■</button>
            <button key="stepForward" onClick={onStepForward}>▶▶</button>
            <button key="stepBackward" onClick={onStepBackWard}>◀◀</button>
        </div>
    )
}