interface TalentsyncAssesementColumnavatarcontrast{
  className: string
}
const TalentsyncAssesementColumnavatarcontrast = (props:TalentsyncAssesementColumnavatarcontrast) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex relative w-[152px] md:w-full">
          <div className="flex my-auto w-[82%]">
            <div className="flex my-auto w-[78%]">
              <div className="flex my-auto w-[71%]">
                <div
                  className="bg-cover bg-light_blue-50 bg-no-repeat flex flex-col h-10 md:h-auto items-center justify-center my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-10"
                  style={{ backgroundImage: "url('images/img_avatar.png')" }}
                >
                  <div className="border border-blue-800_61 border-solid h-10 rounded-[50%] w-10"></div>
                </div>
                <div
                  className="bg-cover bg-light_blue-50 bg-no-repeat flex flex-col h-10 md:h-auto items-center justify-center ml-[-12px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-10 z-[1]"
                  style={{
                    backgroundImage: "url('images/img_avatar_40x40.png')",
                  }}
                >
                  <div className="border border-blue-800_61 border-solid h-10 rounded-[50%] w-10"></div>
                </div>
              </div>
              <div
                className="bg-cover bg-light_blue-50 bg-no-repeat flex flex-col h-10 md:h-auto items-center justify-center ml-[-12px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-10 z-[1]"
                style={{ backgroundImage: "url('images/img_avatar_1.png')" }}
              >
                <div className="border border-blue-800_61 border-solid h-10 rounded-[50%] w-10"></div>
              </div>
            </div>
            <div
              className="bg-cover bg-light_blue-50 bg-no-repeat flex flex-col h-10 md:h-auto items-center justify-center ml-[-12px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-10 z-[1]"
              style={{ backgroundImage: "url('images/img_avatar_2.png')" }}
            >
              <div className="border border-blue-800_61 border-solid h-10 rounded-[50%] w-10"></div>
            </div>
          </div>
          <div
            className="bg-cover bg-light_blue-50 bg-no-repeat flex flex-col h-10 md:h-auto items-center justify-center ml-[-12px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-10 z-[1]"
            style={{ backgroundImage: "url('images/img_avatar_3.png')" }}
          >
            <div className="border border-blue-800_61 border-solid h-10 rounded-[50%] w-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

TalentsyncAssesementColumnavatarcontrast.defaultProps = {};

export default TalentsyncAssesementColumnavatarcontrast;
