export default function LogArea({ log }) {
    const logLines = log.split("\n");
    return(
        <div key={log} className="logArea">
            {logLines.map((line) => (
                <div key={line}>{line}</div>
            ))}
        </div>
    )
}