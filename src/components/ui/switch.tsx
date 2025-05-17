import { type LucideIcon } from "lucide-react";
import { cn } from "../../utilities/cn";

interface SwitchProps {
  CheckedIcon: LucideIcon;
  UncheckedIcon: LucideIcon;
  isChecked: boolean;
  onChange: () => void;
  className?: string;
}

const Switch = ({
  CheckedIcon,
  UncheckedIcon,
  isChecked,
  onChange,
  className = "",
}: SwitchProps) => {
  const Icon = isChecked ? CheckedIcon : UncheckedIcon;

  return (
    <label
      className={cn(
        "flex cursor-pointer items-center w-full justify-end",
        className
      )}
    >
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only"
        />

        <div
          className={`h-8 w-16 rounded-full transition-colors ${
            isChecked ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>

        <div
          className={`absolute top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow transition-transform duration-300 ${
            isChecked ? "translate-x-9" : "translate-x-1"
          }`}
        >
          <Icon className="h-4 w-4 text-gray-700 dark:text-gray-200" />
        </div>
      </div>
    </label>
  );
};

export default Switch;
