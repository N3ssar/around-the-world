import { type ShowMessageProps } from "../../types";
function ShowMessage({ children, className = "" }: ShowMessageProps) {
  return (
    <div className={`text-center ${className ? className : ""}`}>{children}</div>
  );
}
export default ShowMessage;
