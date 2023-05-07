export default function LogArea({ log }) {
    return(
        <div key={log} className="logArea">
            {log}
        </div>
    )
}