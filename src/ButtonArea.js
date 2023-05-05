export default function ButtonArea({
    onStepForward,
    onStepBackward
}) {
    return(
        <div className="buttonArea">
            <button key="startPause">▶/■</button>
            <button key="stepForward" onClick={onStepForward}>▶▶</button>
            <button key="stepBackward" onClick={onStepBackward}>◀◀</button>
        </div>
    )
}