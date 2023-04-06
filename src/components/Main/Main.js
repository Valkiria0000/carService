import SectionMain from "./SectionMain/SectionMain"
import SectionAbout from "./SectionAbout/SectionAbout"
import SectionPrice from "./SectionPrice/SectionPrice"
import SectionSlider from "./SectionSlider/SectionSlider"
import SectionComment from "./SectionComment/SectionComment"

const Main = ()=> {
    return (
        <main >
            
            <SectionMain/>
            <SectionAbout/>
          <SectionPrice/>
            <SectionSlider/>
            <SectionComment/>
        </main>
    )
}

export default Main