import SectionMain from "./Section/SectionMain/SectionMain"
import SectionAbout from "./SectionAbout/SectionAbout"
import SectionPrice from "./SectionPrice/SectionPrice"
import SectionSlider from "./SectionSlider/SectionSlider"

const Main = ()=> {
    return (
        <main>
            <SectionMain/>
            <SectionAbout/>
          <SectionPrice/>
            <SectionSlider/>
        </main>
    )
}

export default Main