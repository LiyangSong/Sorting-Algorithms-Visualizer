import Square from './Square.js'

export default function AnimationArea() {
    return(
        <div className="animationArea">
            <Square number={1} />
            <Square number={2} />
            <Square number={3} />
            <Square number={4} />
        </div>
    )
}