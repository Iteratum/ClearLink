import { Img } from "./index";

interface TalentsyncAssesementMobileappstore1{
    className: string
}
const TalentsyncAssesementMobileappstore1 = (props:TalentsyncAssesementMobileappstore1) => {
  return (
    <>
      <div className={props.className}>
        <div className="">
          <Img
            className="h-[2.5rem] w-[8rem] bg-blend-overlay"
            src="images/googleplay1.png"
            alt="googleplaystorelogo"
          />
          
        </div>
      </div>
    </>
  );
};

TalentsyncAssesementMobileappstore1.defaultProps = {};

export default TalentsyncAssesementMobileappstore1;
