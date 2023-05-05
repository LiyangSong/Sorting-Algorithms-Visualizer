import Square from './Square.js'

export default function AnimationArea({ currentNumbers }) {
    return(
        <div className="animationArea">
            {currentNumbers.map(number =>
                <Square
                    key={number.id}
                    number={number}
                />
            )}
        </div>
    )
}