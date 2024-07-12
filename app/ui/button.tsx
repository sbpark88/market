import React from "react";
import { IconType } from "react-icons";
import clsx from "clsx";

const buttonType = ["button", "submit", "reset"] as const;
type ButtonType = (typeof buttonType)[number];

export default function Button({
  label,
  type = "submit",
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: {
  label: string;
  type?: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "relative w-full rounded-lg disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80",
        outline
          ? "bg-white border-black text-black text-sm py-1 font-light border-[1px]"
          : "bg-rose-500 border-rose-500 text-white py-3 font-semibold border-2",
      )}
    >
      {Icon && <Icon size="24" className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}
