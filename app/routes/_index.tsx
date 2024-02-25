import type { MetaFunction } from "@remix-run/node";
import { Button, Img, Line, List, Text } from "../components/index";
import TalentsyncAssesementColumnavatarcontrast from "../components/TalentsyncAssesementColumnavatarcontrast";
import TalentsyncAssesementFaqitem from "../components/TalentsyncAssesementFaqitem";
import TalentsyncAssesementFaqitem1 from "../components/TalentsyncAssesementFaqitem1";
import TalentsyncAssesementMobileappstore from "../components/TalentsyncAssesementMobileappstore";
import TalentsyncAssesementMobileappstore1 from "../components/TalentsyncAssesementMobileappstore1";
import TalentsyncAssesementRowsearch from "../components/TalentsyncAssesementRowsearch";
import TalentsyncAssesementStackstarbackground from "../components/TalentsyncAssesementStackstarbackground";
import { Fragment } from "react";
import Avatar from "~/components/Avatar";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const talentsyncAssesementRowsearchPropList = [
    {},
    { durationtext: "Cancel at any time" },
    { durationtext: "Access to all features" },
    { durationtext: "Peronalized onboarding" },
  ];

  return (
    <>
      <div className="relative overflow-clip bg-white flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[1440px] items-center justify-start mx-auto pb-[259px] w-full"
            style={{ backgroundImage: "url('images/img_group1.png')" }}
          >
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-10 items-center justify-start pt-10 md:px-10 px-32 sm:px-5 w-auto md:w-full">
                <header className="bg-gray-100 border border-blue_gray-100 border-solid flex items-center justify-evenly sm:px-5 px-8 py-4 rounded-[42px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-7 w-[25px]"
                      src="images/img_save.svg"
                      alt="save"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      <span className="text-gray-900 font-inter text-left font-semibold">
                        ClearLink
                      </span>
                      <span className="text-blue-A200 font-inter text-left font-semibold">
                        .
                      </span>
                    </Text>
                  </div>
                  <ul className="flex gap-4 lg:gap-8 items-center justify-between">
                    <li>
                      <a href="/link">
                        <div className="flex flex-row gap-1.5 items-center justify-start">
                          <Text
                            className="text-blue_gray-500 text-lg w-auto"
                            size="txtInterSemiBold18"
                          >
                            Products
                          </Text>
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/link">
                        <div className="flex flex-row gap-1.5 items-center justify-start">
                          <Text
                            className="text-blue_gray-500 text-lg w-auto"
                            size="txtInterSemiBold18"
                          >
                            Solutions
                          </Text>
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown_One"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/link">
                        <div className="flex flex-row gap-1.5 items-center justify-start">
                          <Text
                            className="text-blue_gray-500 text-lg w-auto"
                            size="txtInterSemiBold18"
                          >
                            Resources
                          </Text>
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown_Two"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/link"
                        className="text-blue_gray-500 text-lg"
                      >
                        <Text
                          className="" 
                          size="txtInterSemiBold18"
                        >
                            Pricing
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Button
                      className="!text-gray-900 border border-blue_gray-300 border-solid cursor-pointer font-semibold min-w-[144px] text-base text-center"
                      shape="round"
                    >
                      Talk to sales
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold min-w-[167px] text-base text-center"
                      shape="round"
                      color="blue_800"
                    >
                      Sign up for free
                    </Button>
                  </div>
                </header>
                <div className="flex md:flex-col flex-row md:gap-15 items-center justify-between max-w-[1408px] w-full">
                  <div className="flex md:flex-1 flex-col gap-12 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                      <Text
                        className="leading-[55px] max-w-[780px] md:max-w-full md:text-5xl text-[64px] tracking-[-1.28px]"
                        size="txtInterSemiBold64"
                      >
                        <>
                          Uniting the world,
                          <br />
                          one video call at a time
                        </>
                      </Text>
                      <div className="flex flex-wrap w-[36%]">
                        <Text
                          className="text-2xl md:text-[22px] text-blue-900 sm:text-xl"
                          size="txtInterRegular24"
                        >
                          Experience the future of communication with ClearLink –
                          where crystal-clear video conferencing meets
                          unparalleled simplicity.
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col md:flex-row gap-5 items-center justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer font-semibold min-w-[221px] rounded-[30px] text-center text-lg"
                          color="blue_800"
                          size="md"
                        >
                          Start your free trial
                        </Button>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_frame10.svg"
                          alt="frameTen"
                          
                        />
                        <Text
                          className="text-blue-800 text-lg w-auto"
                          size="txtInterSemiBold18Blue800"
                        >
                          Discover AI assistant
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <TalentsyncAssesementColumnavatarcontrast className="flex flex-col gap-2 items-start justify-start w-auto" />
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <List
                            className="flex h-4 items-center justify-between"
                            orientation="horizontal"
                          >
                            <div className="gap-1 grid grid-cols-5">
                            {[...Array(5)].map((_, index) => (
                              
                              <TalentsyncAssesementStackstarbackground
                                key={index.toString()}
                                className=""
                              />
                            ))}
                            </div>
                            
                          </List>
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtInterSemiBold16"
                          >
                            5.0
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtInterMedium16"
                        >
                          from 3,000+ reviews
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div>
                  <Avatar />
                  </div>
                </div>
              </div>
              <div className="relative bottom-[15rem] bg-white flex flex-col items-start justify-center max-w-[1728px] py-4 w-[85vw]">
                <div className="flex flex-col gap-6 items-start justify-start sm:px-5 px-8 w-auto">
                  <Text
                    className="text-gray-700 text-center text-xl w-full"
                    size="txtInterMedium20"
                  >
                    Join 1,500+ companies already video conferencing the
                    ClearLink way
                  </Text>
                  <Img
                    className="h-[43px] w-[1371px]"
                    src="images/img_frame22.svg"
                    alt="frameTwentyTwo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-[-360px] mx-auto md:px-10 px-40 sm:px-5 w-[90vw] z-[1]">
            <div className="flex flex-col items-center justify-start m-auto w-[82%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-[60%]">
                  <div className="flex flex-col gap-3 items-center justify-start w-full">
                    <Text
                      className="text-blue-800 text-lg w-full"
                      size="txtInterSemiBold18Blue800"
                    >
                      The ClearLink Advantage
                    </Text>
                    <Text
                      className="text-3xl sm:text-[38px] md:text-[44px] text-gray-900 w-full"
                      size="txtInterSemiBold48"
                    >
                      Why choose ClearLink?
                    </Text>
                  </div>
                  <Text
                    className="leading-[32.00px] max-w-[842px] md:max-w-full text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                    size="txtInterRegular24"
                  >
                    In a world where connection is everything, ClearLink takes
                    the lead. Our cutting-edge video conferencing app offers:
                  </Text>
                </div>
                <div className="gap-10 md:gap-5 grid md:grid-cols-2 grid-cols-1 py-12 items-center justify-center h-fit w-[85vw]">
                    <div className="">
                      <div className="gap-10 md:gap-5 grid md:grid-cols-2 grid-cols-1 justify-center w-full">
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Button
                            className="border border-gray-50 border-solid flex h-14 items-center justify-center rounded-[50%] w-14"
                            shape="circle"
                            color="gray_50"
                          >
                            <Img
                              className="h-6"
                              src="images/img_upload_blue_800.svg"
                              alt="upload"
                            />
                          </Button>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtInterSemiBold24"
                            >
                              Crystal-clear HD video
                            </Text>
                            <Text
                              className="leading-[28.00px] max-w-[360px] md:max-w-full text-gray-700 text-lg"
                              size="txtInterRegular18"
                            >
                              No more pixelation or blurriness – just stunning,
                              lifelike clarity that brings your team closer in
                              meetings.
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Button
                            className="border border-blue_gray-50 border-solid flex h-14 items-center justify-center rounded-[50%] w-14"
                            shape="circle"
                            color="gray_50"
                          >
                            <Img
                              className="h-6"
                              src="images/img_recording01.svg"
                              alt="recordingOne"
                            />
                          </Button>
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtInterSemiBold24"
                            >
                              Noise-canceling audio
                            </Text>
                            <Text
                              className="leading-[28.00px] max-w-[360px] md:max-w-full text-gray-700 text-lg"
                              size="txtInterRegular18"
                            >
                              Say goodbye to distractions with our advanced
                              audio tech for crisp, interruption-free
                              conversations.
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Button
                            className="border border-blue_gray-50 border-solid flex h-14 items-center justify-center rounded-[50%] w-14"
                            shape="circle"
                            color="gray_50"
                          >
                            <Img
                              className="h-6"
                              src="images/img_calendar.svg"
                              alt="calendar"
                            />
                          </Button>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtInterSemiBold24"
                            >
                              Scheduling made easy
                            </Text>
                            <Text
                              className="leading-[28.00px] max-w-[360px] md:max-w-full text-gray-700 text-lg"
                              size="txtInterRegular18"
                            >
                              <>
                                Streamline your agenda with ClearLink&#39;s
                                intuitive scheduling. Set up meetings, send
                                invitations, and receive reminders in one place.
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                          <Button
                            className="border border-blue_gray-50 border-solid flex h-14 items-center justify-center rounded-[50%] w-14"
                            shape="circle"
                            color="gray_50"
                          >
                            <Img
                              className="h-6"
                              src="images/img_lockunlocked04.svg"
                              alt="lockunlockedFour"
                            />
                          </Button>
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                              size="txtInterSemiBold24"
                            >
                              Bank-grade security
                            </Text>
                            <Text
                              className="leading-[28.00px] max-w-[360px] md:max-w-full text-gray-700 text-lg"
                              size="txtInterRegular18"
                            >
                              Your privacy is our priority with bank-grade
                              security protocols safeguarding your meetings and
                              data from unwanted intruders.
                            </Text>
                          </div>
                        </div>
                      </div>
                  </div>
                  <Img
                    className="md:flex-1 h-[30rem] md:h-full object-cover w-60 md:w-[30rem]"
                    src="images/img_rectangle1.png"
                    alt="rectangleOne"
                  />
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[243px] right-[24%] top-[59%] w-[282px]"
              src="images/img_handdrawnarrow.svg"
              alt="handdrawnarrow"
            />
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col items-center justify-center max-w-[1728px] py-24 h-[50rem] w-full">
          <div className="grid md:grid-cols-2 md:gap-10 gap-16 items-center justify-center max-w-[1408px] mx-auto md:px-5 w-[85vw]">
            <div className="flex flex-1 flex-col gap-12 items-start justify-start w-full">
              <Img
                className="h-8 w-28"
                src="images/img_shopifycomsvg.svg"
                alt="shopifycomsvg"
              />
              <List
                className="sm:flex-col flex-row gap-1 grid grid-cols-5 justify-start w-auto"
                orientation="horizontal"
              >
                <div className="grid grid-cols-5">
                {[...Array(5)].map((_, index) => (
                              
                  <TalentsyncAssesementStackstarbackground
                    key={index.toString()}
                    className=""
                  />
                ))}
                </div>
              </List>
              <Text
                className="leading-[45.00px] md:max-w-full max-w-screen-sm md:text-[30px] text-[44px] text-gray-900"
                size="txtInterMedium44"
              >
                <>
                  ClearLink has upgraded our remote meetings. High-quality
                  video, screen sharing, and
                  <br />
                  top-notch security make it essential for our team.
                </>
              </Text>
              <div className="grid md:grid-cols-2 gap-3 items-start justify-start w-full">
                <div className="flex flex-1 flex-row gap-4 items-start justify-start w-full">
                  <div
                    className="bg-cover bg-light_blue-50 bg-no-repeat flex flex-col h-[3rem] md:h-auto items-center justify-center rounded-[50%] w-[3rem]"
                    style={{
                      backgroundImage: "url('images/img_avatar_56x56.png')",
                    }}
                  >
                    <div className="border border-blue-800_61 border-solid h-14 rounded-[50%] w-14"></div>
                  </div>
                  <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-lg w-full"
                      size="txtInterSemiBold20"
                    >
                      Sarah Thompson
                    </Text>
                    <Text
                      className="text-gray-700 text-base w-full"
                      size="txtInterRegular18"
                    >
                      Project Manager, Shopify
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-8 items-start justify-center w-auto">
                  <Button
                    className="border border-light_blue-50 border-solid flex h-14 items-center justify-center rounded-[50%] w-14"
                    shape="circle"
                    color="white_A700_e5"
                  >
                    <Img
                      className="h-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="border border-light_blue-50 border-solid flex h-14 items-center justify-center rounded-[50%] w-14 rotate-180"
                    shape="circle"
                    color="white_A700_e5"
                  >
                    <Img
                      className="h-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start sm:px-5 px-8 w-[48%] md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-[90%]">
                <div className="grid grid-cols-2 px-16 gap-4 items-end justify-center w-[59%] md:w-full">
                  <Img
                    className="h-40 md:h-auto mt-20 object-cover w-40"
                    src="images/img_image.png"
                    alt="image_Three"
                  />
                  <Img
                    className="h-60 md:h-auto object-cover"
                    src="images/img_image_240x160.png"
                    alt="image_Four"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 items-start justify-between w-full">
                  <Img
                    className="h-32 md:h-auto object-cover"
                    src="images/img_image_128x192.png"
                    alt="image_Five"
                  />
                  <Img
                    className="h-60 md:h-auto object-cover"
                    src="images/img_image_1.png"
                    alt="image_Six"
                  />
                  <Img
                    className="h-32 md:h-auto object-cover"
                    src="images/img_image_2.png"
                    alt="image_Seven"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col items-start justify-start max-w-[1728px] mt-0.5 md:px-10 px-40 sm:px-5 py-24 w-[90vw]">
          <div className="grid md:grid-cols-2 md:gap-10 items-start justify-between max-w-[1408px] mx-auto w-full">
            <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-[547px] sm:w-full">
              <div className="flex flex-col gap-3 items-center justify-start w-full">
                <a href="/link" className="text-blue-600 text-lg w-full">
                  <Text size="txtInterSemiBold18Blue800">Support</Text>
                </a>
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-0.96px] w-full"
                  size="txtInterSemiBold48"
                >
                  FAQs
                </Text>
              </div>
              <Text
                className="leading-[32.00px] max-w-[547px] md:max-w-full text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                size="txtInterRegular24"
              >
                <span className="text-gray-500 font-inter text-left font-normal">
                  Everything you need to know about the product and billing.
                  Can’t find the answer you’re looking for? Please{" "}
                </span>
                <a
                  href="/link"
                  className="text-gray-500 font-inter text-left font-normal underline"
                >
                  chat to our friendly team
                </a>
                <span className="text-gray-500 font-inter text-left font-normal">
                  .
                </span>
              </Text>
            </div>
            <List
              className="flex flex-1 flex-col gap-1 items-center max-w-[765px] w-full"
              orientation="vertical"
            >
              <div className="bg-gray-50 border border-gray-50 border-solid flex flex-1 flex-col items-start justify-start my-0 p-8 sm:px-5 rounded-[16px] w-full">
                <TalentsyncAssesementFaqitem className="flex flex-col items-center justify-start w-full" />
              </div>
              <Line className="self-center h-px bg-gray-50 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start my-0 p-8 sm:px-5 w-full">
                <TalentsyncAssesementFaqitem1 className="flex flex-col items-center justify-start w-full" />
              </div>
              <Line className="self-center h-px bg-gray-50 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start my-0 p-8 sm:px-5 w-full">
                <TalentsyncAssesementFaqitem1
                  className="flex flex-col items-center justify-start w-full"
                  questiontext="Is ClearLink compatible with other video conferencing platforms?"
                />
              </div>
              <Line className="self-center h-px bg-gray-50 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start my-0 p-8 sm:px-5 w-full">
                <TalentsyncAssesementFaqitem1
                  className="flex flex-col items-center justify-start w-full"
                  questiontext="How does ClearLink ensure the security of my video conferences?"
                />
              </div>
              <Line className="self-center h-px bg-gray-50 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start my-0 p-8 sm:px-5 w-full">
                <TalentsyncAssesementFaqitem1
                  className="flex flex-col items-center justify-start w-full"
                  questiontext="Do I need to download any software to use ClearLink?"
                />
              </div>
              <Line className="self-center h-px bg-gray-50 w-full" />
              <div className="flex flex-1 flex-col items-start justify-start my-0 p-8 sm:px-5 w-full">
                <TalentsyncAssesementFaqitem1
                  className="flex flex-col items-center justify-start w-full"
                  questiontext="What kind of customer support does ClearLink provide?"
                />
              </div>
            </List>
          </div>
        </div>
        <div className="relative left-5 grid md:grid-cols-2 md:gap-10 items-center justify-between max-w-[1728px] md:px-10 px-40 sm:px-5 py-24 w-[90vw]">
          <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-[579px] sm:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Text
                className="leading-[60.00px] max-w-[579px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-0.96px]"
                size="txtInterSemiBold48Gray900"
              >
                Ready to clear the path to perfect communication?
              </Text>
              <List
                className="flex flex-col gap-5 items-start pl-4 w-full"
                orientation="vertical"
              >
                {talentsyncAssesementRowsearchPropList.map((props, index) => (
                  <Fragment key={`TalentsyncAssesementRowsearch${index}`}>
                    <TalentsyncAssesementRowsearch
                      className="grid grid-cols-4 p-2 items-start justify-start my-0 w-full"
                      {...props}
                    />
                  </Fragment>
                ))}
              </List>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Button
                className="!text-gray-900 border border-gray-300 border-solid cursor-pointer font-semibold min-w-[144px] text-base text-center"
                shape="round"
              >
                Talk to sales
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[195px] text-base text-center"
                shape="round"
                color="blue_800"
              >
                Start your free trial
              </Button>
            </div>
          </div>
            <div className="items-center justify-start outline outline-[8px] outline-gray-900 rounded-[12px] w-screen">
              <Img
                className="h-[50rem] md:h-auto object-cover rounded-[12px] w-[50rem]"
                src="images/img_screenmockupreplace.png"
                alt="screenmockuprep"
              />
            </div>
        </div>
        <section className="bg-white flex items-center justify-center md:px-5 w-auto">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-start pb-12 pt-12 w-[90%]">
              <div className="grid md:grid-cols-8 md:gap-10 gap-[100px] items-start justify-center w-auto md:w-full">
                <div className="flex flex-col col-span-3 gap-8 items-start justify-start w-[400px] sm:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-7 w-[25px]"
                      src="images/img_save.svg"
                      alt="save_One"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      <span className="text-gray-900 font-inter text-left font-semibold">
                        ClearLink
                      </span>
                      <span className="text-blue-A200 font-inter text-left font-semibold">
                        .
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="leading-[28.00px] max-w-[400px] md:max-w-full text-gray-700 text-lg"
                    size="txtInterRegular18"
                  >
                    ClearLink is your gateway to effortless, high-quality video
                    conferencing. Join us in shaping the future of
                    communication!
                  </Text>
                </div>
                <div className="grid md:grid-cols-4 col-span-4 gap-8 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-40">
                    <Text
                      className="text-base text-gray-500 w-full"
                      size="txtInterSemiBold16Bluegray500"
                    >
                      Product
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Overview
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Features
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Solutions
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Tutorials
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Pricing
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-40">
                    <Text
                      className="text-base text-gray-500 w-full"
                      size="txtInterSemiBold16Bluegray500"
                    >
                      Company
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            About us
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <a
                            href="/link"
                            className="text-gray-700 text-lg w-auto"
                          >
                            <Text 
                              className=""
                              size="txtInterSemiBold18Bluegray700"
                              >
                              Careers
                            </Text>
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Press
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            News
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Contact
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-40">
                    <Text
                      className="text-base text-gray-500 w-full"
                      size="txtInterSemiBold16Bluegray500"
                    >
                      Resources
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Blog
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Events
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Help centre
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Tutorials
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <a
                            href="/link"
                            className="text-gray-700 text-lg w-auto"
                          >
                            <Text 
                              className=""
                              size="txtInterSemiBold18Bluegray700"
                              >
                              Support
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-40">
                    <Text
                      className="text-base text-gray-500 w-full"
                      size="txtInterSemiBold16Bluegray500"
                    >
                      Legal
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Terms
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <a
                            href="/link"
                            className="text-gray-700 text-lg w-auto"
                          >
                            <Text 
                              className=""
                              size="txtInterSemiBold18Bluegray700"
                            >
                              Privacy
                            </Text>
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Cookies
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Licenses
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-gray-700 text-lg w-auto"
                            size="txtInterSemiBold18Bluegray700"
                          >
                            Contact
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col col-span-1 gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue-A700_02 w-full"
                    size="txtInterSemiBold16BlueA70002"
                  >
                    Get the app
                  </Text>
                  <TalentsyncAssesementMobileappstore className="" />
                  <TalentsyncAssesementMobileappstore1 className="" />
                </div>
              </div>
            </div>
            
          </div>
          
        </section>
        <footer className="bg-gray-50 flex py-12 w-full">
          <div className="flex px-32 gap-x-[30rem] items-center justify-between">
            <div>
              <Text
                className="flex-1 text-base text-gray-500 w-auto"
                size="txtInterRegular16"
              >
                © 2023 ClearLink. All rights reserved.
              </Text>
            </div>
            <div className="flex flex-row gap-6 items-center">
              <Img
                className="h-6 w-6"
                src="images/img_link.svg"
                alt="link"
              />
              <Img
                className="h-6 w-6"
                src="images/img_socialicon.svg"
                alt="socialicon"
              />
              <Img
                className="h-6 w-6"
                src="images/img_socialicon_blue_gray_300.svg"
                alt="socialicon_One"
              />
              <Img
                className="h-6 w-6"
                src="images/img_socialicon_blue_gray_300_24x24.svg"
                alt="socialicon_Two"
              />
              <Img
                className="h-6 w-6"
                src="images/img_socialicon_24x24.svg"
                alt="socialicon_Three"
              />
              <Img
                className="h-6 w-6"
                src="images/img_socialicon_1.svg"
                alt="socialicon_Four"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
