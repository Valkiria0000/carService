import SectionMain from "./SectionMain/SectionMain"
import SectionAbout from "./SectionAbout/SectionAbout"
import SectionPrice from "./SectionPrice/SectionPrice"
import SectionSlider from "./SectionSlider/SectionSlider"
import SectionComment from "./SectionComment/SectionComment"
import SectionContact from "./SectionContact/SectionContact"

const Main = ()=> {
    return (
        <main >
            
            <SectionMain/>
            <SectionAbout/>
          <SectionPrice/>
            <SectionSlider/>
            <SectionContact/>
            <SectionComment/>
        </main>
    )
}

export default Main