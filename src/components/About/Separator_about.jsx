import Sep from '../../assets/svg/Separator/separator2.svg'

const Separator_about = ({title}) => {
  return (
    <div className="about__separator">
      <h3 className="separator_title">{title}</h3>
      <img src={Sep} alt="" className="separator_svg"/>
      <div className='separator_final-line'></div>
    </div>

  );
};

export default Separator_about;
