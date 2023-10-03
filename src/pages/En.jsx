import Section_1 from "../components/Home/Section_1";
import Section_2 from "../components/Home/Section_2";
import Main_social_icons from "../components/Main_social_icons";

const En = () => {
  return (
    <>
      <div className="home_container">
        <Main_social_icons />
        <Section_1 />
        <Section_2 />
      </div>
    </>
  );
};

export default En;
