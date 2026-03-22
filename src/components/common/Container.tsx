import { type ContainerProps } from "../../types";
function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-16 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
