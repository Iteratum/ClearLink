interface TextProps{
  className: string,
  children: React.ReactNode,
  size: string,
}
const sizeClasses: object = {
  txtInterSemiBold48: "font-inter font-semibold",
  txtInterSemiBold16Bluegray500: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium44: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterRegular24Bluegray700: "font-inter font-normal",
  txtInterSemiBold18Blue800: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold16BlueA70002: "font-inter font-semibold",
  txtInterSemiBold18Bluegray700: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterSemiBold64: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular24: "font-inter font-normal",
  txtInterSemiBold48Gray900: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, ...restProps }: TextProps) => {

  return (
    <div
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export { Text };
