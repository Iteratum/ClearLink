import PropTypes from "prop-types";

const shapes = { round: "rounded-[26px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs",
    white_A700_e5: "bg-white-A700_e5",
    blue_800: "bg-blue-800 shadow-bs text-white-A700",
    gray_50: "bg-gray-50",
  },
};
const sizes = { xs: "p-3", sm: "p-4", md: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "white_A700_e5",
    "blue_800",
    "gray_50",
  ]),
};

export { Button };
