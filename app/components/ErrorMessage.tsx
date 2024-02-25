interface ErrorMessageProps{
    errors: string[],
    className: string
}
export const ErrorMessage = ({ errors = [], className = "" }:ErrorMessageProps) => {
    return (
      errors?.length > 0 && (
        <div
          className={`text-red-500 text-left text-xs w-full mt-1 ${className}`}
        >
          {errors.join(", ")}
        </div>
      )
    );
  };