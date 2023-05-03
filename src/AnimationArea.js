import Square from './Square.js'

export default function AnimationArea({ numbers }) {
    return(
        <div className="animationArea">
            {numbers.map(number =>
                <Square key={number.id} number={number.number} />
            )}
        </div>
    )
}