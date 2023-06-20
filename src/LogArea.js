export default function LogArea({ log }) {
    const logSentences = log.split("\n");
    return(
        <div key={log} className="logArea">
            {logSentences.map((sentence) => (
                <div key={sentence}>{sentence}</div>
            ))}
        </div>
    )
}