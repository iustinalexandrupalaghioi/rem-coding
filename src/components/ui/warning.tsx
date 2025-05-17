import { TriangleAlert } from "lucide-react";
import { cn } from "../../utilities/cn";

const variantStyles = {
  warning: "text-gray-700 dark:text-gray-200 bg-yellow-400 dark:bg-yellow-500",
  danger: "text-white bg-red-500 dark:bg-red-600",
};

const Warning = ({
  warning,
  className,
  variant = "warning",
}: {
  warning: string;
  className?: string;
  variant?: "warning" | "danger";
}) => {
  return (
    <div
      title={warning}
      className={cn(
        "flex items-center mt-4 rounded-lg p-2",
        variantStyles[variant],
        className
      )}
    >
      <TriangleAlert className="w-6 h-6" />
      <h1 className="px-2 text-sm">{warning}</h1>
    </div>
  );
};

export default Warning;
