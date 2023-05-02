import Description from './Description.js'
import UserInput from './UserInput.js'
import AnimationArea from './AnimationArea.js'
import Footer from './Footer'

export default function ContentProvider({ sortType }) {
    return(
        <div className="contentProvider">
            <Description sortType={sortType} />
            <UserInput />
            <AnimationArea sortType={sortType} />
            <Footer />
        </div>
    )
}