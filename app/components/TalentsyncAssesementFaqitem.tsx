interface TalentsyncAssesementFaqitem{
  className: string,
  question: string, 
  answer: string
}
import { Img, Text } from "./index";

const TalentsyncAssesementFaqitem = (props:TalentsyncAssesementFaqitem) => {
  return (
    <>
      <div className={props.className}>
        <div className="grid grid-cols-6 gap-6 items-start justify-start w-full">
          <div className="col-span-5 gap-2 items-start justify-start w-full">
            <Text
              className="text-gray-900 text-xl w-full"
              size="txtInterSemiBold20"
            >
              {props?.question}
            </Text>
            <Text
              className="leading-[28.00px] max-w-[653px] md:max-w-full text-blue_gray-700 text-lg"
              size="txtInterRegular18"
            >
              {props?.answer}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_minuscircle.svg"
              alt="minuscircle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

TalentsyncAssesementFaqitem.defaultProps = {
  question: "How many participants can join a ClearLink video conference?",
  answer:
    "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
};

export default TalentsyncAssesementFaqitem;
