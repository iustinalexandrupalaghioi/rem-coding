import { cn } from "../utilities/cn";
import { Card, CardBody, CardFooter, CardHeader } from "./ui/card";

const SkeletonBox = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "bg-gray-300 dark:bg-gray-700 animate-pulse rounded",
      className
    )}
  />
);

const SkipCardSkeleton = () => {
  return (
    <Card className="relative">
      <SkeletonBox className="h-56 w-full rounded-t-lg" />
      <SkeletonBox className="absolute top-2 right-2 h-6 w-16" />
      <CardHeader>
        <SkeletonBox className="h-6 w-1/2" />
        <SkeletonBox className="h-8 w-24" />
      </CardHeader>
      <CardBody>
        <SkeletonBox className="h-8 w-1/3 my-4" />
        <SkeletonBox className="h-10 w-2/3" />
      </CardBody>
      <CardFooter>
        <SkeletonBox className="h-12 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
};

export default SkipCardSkeleton;
