import Square from './Square.js'

export default function AnimationArea({ currentNumbers }) {

    return(
        <div className="animationArea">
            {currentNumbers.map((number, index) => {
                return (
                    <Square
                        key={number.id}
                        number={number}
                        style={{
                            left: (window.outerWidth - 80 - currentNumbers.length * 100) / 2 + index * 100
                        }}
                    />
                )
            })}
        </div>
    )
}