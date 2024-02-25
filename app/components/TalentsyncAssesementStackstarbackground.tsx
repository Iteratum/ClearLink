
import { Img } from "./index";

interface TalentsyncAssesementStackstarbackground{
  className: string
}
const TalentsyncAssesementStackstarbackground = (props:TalentsyncAssesementStackstarbackground) => {
  return (
    <>
      <div className={props.className}>
        
        <Img
          className="h-[19px] rounded-bl-[1px] rounded-br-[1px] w-5"
          src="images/img_star.svg"
          alt="star"
          />
      </div>
    </>
  );
};

TalentsyncAssesementStackstarbackground.defaultProps = {};

export default TalentsyncAssesementStackstarbackground;
