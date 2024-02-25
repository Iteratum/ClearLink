interface LineProps{
  className: string
}
const Line = ({ className, ...restProps }:LineProps) => {
  return <div className={className} {...restProps} />;
};
export { Line };
