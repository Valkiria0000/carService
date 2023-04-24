import SectionMain from "./SectionMain/SectionMain";
import SectionAbout from "./SectionAbout/SectionAbout";
import SectionPrice from "./SectionPrice/SectionPrice";
import SectionSlider from "./SectionSlider/SectionSlider";
import SectionComment from "./SectionComment/SectionComment";
import SectionContact from "./SectionContact/SectionContact";

const Main = (props) => {

  return (
    <main>
      <SectionMain />
      <SectionAbout />
      <SectionPrice store={props.store} />
      <SectionSlider />
      <SectionContact />
      <SectionComment />
    </main>
  );
};

export default Main;
