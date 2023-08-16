/**
 * The component to show current log information passed from father component.
 * @author - Liyang
 * @param {string} log - Current log string.
 * @returns {JSX.Element} - The rendered JSX Component.
 */
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