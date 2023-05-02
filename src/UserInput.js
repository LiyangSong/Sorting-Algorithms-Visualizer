export default function UserInput() {
    return(
        <div>
            <InputArea />
            <ButtonArea />
        </div>
    )
}

function InputArea() {
    return(
        <input type="number" />
    )
}

function ButtonArea() {
    return(
        <div>
            <button>▶/■</button>
            <button>▶▶</button>
            <button>◀◀</button>
        </div>
    )
}