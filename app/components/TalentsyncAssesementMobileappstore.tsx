import { Img } from "./index";

interface TalentsyncAssesementMobileappstore{
  className: string
}
const TalentsyncAssesementMobileappstore = (props:TalentsyncAssesementMobileappstore) => {
  return (
    <>
      <div className={props.className}>
        <div className="w-full">
          <Img className="h-[2.5rem] w-[8rem] bg-blend-overlay" src="images/appstore1.png" alt="applestorelogo" />
          
        </div>
      </div>
    </>
  );
};

TalentsyncAssesementMobileappstore.defaultProps = {};

export default TalentsyncAssesementMobileappstore;
