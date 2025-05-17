import type { ReactNode } from "react";
import { cn } from "../../utilities/cn";

export const Card = ({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      id={id}
      className={cn(
        "w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardImage = ({
  image = "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg",
  imageDescription,
  className,
}: {
  image: string;
  imageDescription?: string;
  className?: string;
}) => {
  return (
    <img
      className={cn("object-cover object-center w-full h-56", className)}
      src={image}
      alt={imageDescription}
    />
  );
};

export const CardHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 py-3 bg-gray-900 text-xl font-semibold text-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardDescription = ({
  description,
  className,
}: {
  description: string;
  className?: string;
}) => {
  return (
    <p
      title={description}
      className={cn("py-2 text-gray-700 dark:text-gray-400 text-lg", className)}
    >
      {description}
    </p>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("px-6 py-4", className)}>{children}</div>;
};

export const CardFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-6 py-4 dark:border-gray-700", className)}>
      {children}
    </div>
  );
};
