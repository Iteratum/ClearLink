import { Img, Button } from "../components/index"
export default function Avatar() {
    return (
        <>
            <div className="relative z-[1] bottom-[25rem] left-[20vw] box-border bg-gray-100 border border-blue-100 border-solid flex sm:flex-1 flex-col gap-3 justify-end items-center p-4 sm:px-5 rounded-[16px] shadow-2xl w-[40rem]">
                    <div className="flex flex-col items-center justify-center h-[23rem]">
                      <div className="gap-2 grid grid-cols-3">
                        <div className=" bg-orange-300 flex flex-1 flex-col h-40 items-center justify-start px-[3px] rounded-[12px] w-[12rem]">
                          <Img
                            className="h-40 md:h-auto rounded-[12px] object-cover w-40"
                            src="images/img_image21.png"
                            alt="imageTwentyOne"
                          />
                        </div>
                        <div className=" bg-purple-400 flex flex-1 flex-col h-40 items-center justify-start rounded-[12px] w-[12rem]">
                          <Img
                            className="h-40 md:h-auto object-cover rounded-[12px] w-40"
                            src="images/img_image100.png"
                            alt="image100"
                          />
                        </div>
                        <div className=" bg-green-300 flex flex-1 flex-col h-40 items-center justify-start rounded-[12px] w-[12rem]">
                          <Img
                            className="h-40 md:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-40"
                            src="images/img_image8.png"
                            alt="imageEight"
                          />
                        </div>
                        <div className="bg-purple-200 flex flex-1 flex-col h-40 items-center justify-end pt-3 rounded-[12px] w-[12rem]">
                          <Img
                            className="h-40 md:h-40 object-cover rounded-tl-[12px] rounded-tr-[12px] w-40"
                            src="images/img_image72.png"
                            alt="imageSeventyTwo"
                          />
                        </div>
                        <div className="bg-amber-300 flex flex-1 flex-col h-40 items-center justify-start rounded-[12px] w-[12rem]">
                          <Img
                            className="h-40 md:h-40 object-cover rounded-[12px] w-40"
                            src="images/img_image108.png"
                            alt="image108"
                          />
                        </div>
                        <div className="bg-pink-200 flex flex-1 flex-col h-40 items-center justify-start rounded-[12px] w-[12rem]">
                          <Img
                            className="h-40 md:h-auto object-cover rounded-[12px] w-40"
                            src="images/img_image103.png"
                            alt="image103"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Button
                        className="border border-light_blue-50 border-solid flex h-11 items-center justify-center w-11"
                        shape="circle"
                        size="xs"
                      >
                        <Img
                          className="h-5"
                          src="images/img_microphone01.svg"
                          alt="microphoneOne"
                        />
                      </Button>
                      <Button
                        className="border border-light_blue-50 border-solid flex h-11 items-center justify-center w-11"
                        shape="circle"
                        size="xs"
                      >
                        <Img
                          className="h-5"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      </Button>
                      <Button
                        className="border border-light_blue-50 border-solid flex h-11 items-center justify-center w-11"
                        shape="circle"
                        size="xs"
                      >
                        <Img
                          className="h-5"
                          src="images/img_monitor01.svg"
                          alt="monitorOne"
                        />
                      </Button>
                      <Button
                        className="border border-light_blue-50 border-solid flex h-11 items-center justify-center w-11"
                        shape="circle"
                        size="xs"
                      >
                        <Img
                          className="h-5"
                          src="images/img_facesmile.svg"
                          alt="facesmile"
                        />
                      </Button>
                      <Button
                        className="border border-light_blue-50 border-solid flex h-11 items-center justify-center w-11"
                        shape="circle"
                        size="xs"
                      >
                        <Img
                          className="h-5"
                          src="images/img_search_blue_800.svg"
                          alt="search"
                        />
                      </Button>
                      <Button
                        className="border border-light_blue-50 border-solid flex h-11 items-center justify-center w-11"
                        shape="circle"
                        size="xs"
                      >
                        <Img
                          className="h-5"
                          src="images/img_search.svg"
                          alt="search_One"
                        />
                      </Button>
                    </div>
                  </div>
        </>
    )
}