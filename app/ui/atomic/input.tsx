import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";
import clsx from "clsx";

export default function Input({
  id,
  label,
  type = "text",
  placeholder = "",
  disabled,
  unit,
  register,
  required,
  errors,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  unit?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}) {
  return (
    <div className="relative w-full">
      {unit && UnitSign[unit]}
      <input
        type={type}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        {...register(id, { required })}
        className={clsx(
          "w-full p-4 pt-6 font-light dark:text-black bg-white border-2 dark:border-rose-300 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed",
          unit ? "pl-9" : "pl-4",
          errors[id] ? "border-rose-500" : "border-neutral-300",
          {
            "focus:border-black": errors[id],
          },
        )}
      />
      <label
        htmlFor=""
        className={clsx(
          "absolute duration-150 transform -translate-y-2 top-5 z-10 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
          unit ? "left-9" : "left-4",
          errors[id] ? "text-rose-500" : "text-zinc-400",
        )}
      >
        {label}
      </label>
    </div>
  );
}

const UnitSign: Record<string, ReactNode> = {
  won: <span className="absolute text-neutral-700 top-5 left-2">￦</span>,
};
