import React, { FC } from "react";
import "./styles.scss";

interface ButtonProps {
  text: string;
  variant: "transparent" | "block" | "fluid" | "danger" | "reset";
}

const ButtonComponent: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, variant, ...rest }) => {
  return (
    <div>
      <button
        className={`${
          variant === "block"
            ? "blockButton"
            : variant === "danger"
            ? "dangerButton"
            : variant === "fluid"
            ? "fluidButton"
            : variant === "reset"
            ? "resetButton"
            : "transparentButton"
        }`}
        {...rest}>
        <div>{text}</div>
      </button>
    </div>
  );
};

export default ButtonComponent;
