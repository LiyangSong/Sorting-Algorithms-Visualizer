export default function ButtonArea({
    onAutoRun,
    onStepForward,
    onStepBackward,
    disableForward,
    disableBackward
}) {
    return(
        <div className="buttonArea">
            <button
                key="stepBackward"
                onClick={onStepBackward}
                disabled={disableBackward}
            >◀◀</button>
            <button key="startPause" onClick={onAutoRun}>▶/■</button>
            <button
                key="stepForward"
                onClick={onStepForward}
                disabled={disableForward}
            >▶▶</button>
        </div>
    )
}