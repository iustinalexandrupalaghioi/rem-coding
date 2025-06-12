import useSkips from "../hooks/use-skips";
import ErrorMessage from "./ErrorMessage";
import SkipCardSkeleton from "./SkipCardSkeleton";
import SkipCard from "./SkipCard";
import { type Dispatch, type SetStateAction } from "react";

interface SkipsGridProps {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
const SkipsGrid = ({ setDrawerOpen }: SkipsGridProps) => {
  const { data, error, isLoading } = useSkips();

  if (error) {
    console.error("Error fetching skips:", error);
    return <ErrorMessage />;
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-start">
      {!data && isLoading && <SkipCardSkeleton />}
      {!isLoading &&
        data &&
        data.map((skip) => (
          <SkipCard setDrawerOpen={setDrawerOpen} skip={skip} key={skip.id} />
        ))}
    </div>
  );
};

export default SkipsGrid;
