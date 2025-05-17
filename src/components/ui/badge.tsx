import type { ReactNode } from "react";
import { cn } from "../../utilities/cn";

const Badge = ({
  textContent,
  className,
}: {
  textContent: string;
  className?: ReactNode;
}) => {
  return (
    <span
      title={textContent}
      className={cn(
        "bg-blue-600 inline-block rounded-full border border-transparent px-4 py-1 text-sm font-medium text-white",
        className
      )}
    >
      {textContent}
    </span>
  );
};

export default Badge;
