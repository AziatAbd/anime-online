import React, { ButtonHTMLAttributes, FC } from "react";

type Props = {
  variant: "outlined" | "contained";
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ variant, children, ...props }: Props) => {
  const containedVariant = "bg-[#bd01fe] py-1.5 hover:bg-[#bf01fed1] ";
  const outlinedVariant =
    "bg-inherit py-1 border-[#bd01fe] border-2 hover:border-[#bf01fed1] hover:bg-[#bf01fed1]";

  return (
    <button
      className={`${
        variant === "contained" ? containedVariant : outlinedVariant
      } rounded-md px-6 text-[18px] text-white duration-500 active:opacity-75`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
