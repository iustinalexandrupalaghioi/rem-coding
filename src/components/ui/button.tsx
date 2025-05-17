import { cn } from "../../utilities/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary";
}

const Button = ({
  children,
  iconRight,
  iconLeft,
  size = "md",
  variant = "default",
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-500 focus:outline-none";

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const variants = {
    default: `border border-blue-500 ${
      disabled
        ? "cursor-not-allowed opacity-50 bg-gray-200 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
        : "cursor-pointer bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
    }`,
    primary: `border border-blue-600 ${
      disabled
        ? "cursor-not-allowed opacity-50 bg-blue-500 text-white dark:bg-blue-600"
        : "cursor-pointer bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
    }`,
  };

  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
