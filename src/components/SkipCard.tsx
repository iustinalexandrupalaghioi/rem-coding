import { ArrowRight, CheckIcon } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Skip } from "../entities/Skip";
import Badge from "./ui/badge";
import Button from "./ui/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
} from "./ui/card";
import Warning from "./ui/warning";
import { useAppContext } from "../contexts/AppContext";

interface SkipCardProps {
  skip: Skip;

  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
const SkipCard = ({ skip, setDrawerOpen }: SkipCardProps) => {
  const { skip: activeSkip, setSkip } = useAppContext();
  const [isActive, setIsActive] = useState<boolean>(false);

  const {
    id,
    size,
    hire_period_days,
    allowed_on_road,
    allows_heavy_waste,
    price,
    image,
  } = skip;

  const handleClick = () => {
    if (isActive) {
      setSkip(undefined);
    } else {
      setSkip(skip);
    }
    setDrawerOpen(isActive ? false : true);
  };

  useEffect(() => {
    setIsActive(id === activeSkip?.id);
  }, [activeSkip]);

  return (
    <Card
      id={id.toString()}
      className={`relative ${
        !allows_heavy_waste && "opacity-50 cursor-not-allowed"
      }`}
    >
      <CardImage image={image} imageDescription={`${size} Skip`} />
      <Badge textContent={`${size} Yards`} className="absolute top-2 right-2" />

      <CardHeader>
        <h1
          title={`${size} Yard Skip`}
          className="mx-3 text-xl font-semibold text-white"
        >
          {size} Yard Skip
        </h1>
        <p title={`£${price}`} className="text-3xl font-bold text-blue-500">
          £{price}
        </p>
      </CardHeader>
      <CardBody>
        <CardDescription description={`${hire_period_days} day hire period`} />
        {!allowed_on_road && <Warning warning="Not Allowed On The Road" />}
        {!allows_heavy_waste && (
          <Warning variant="danger" warning="Not Suitable for Heavy Waste" />
        )}
      </CardBody>
      <CardFooter>
        <Button
          aria-pressed={isActive}
          size="lg"
          variant={isActive ? "primary" : "default"}
          iconRight={
            isActive ? (
              <CheckIcon className="w-5 h-5" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )
          }
          className="w-full"
          disabled={!allows_heavy_waste}
          onClick={handleClick}
          title={
            !allows_heavy_waste
              ? "Not allowed"
              : isActive
              ? "Unselect this skip"
              : "Select this skip"
          }
          aria-label={`Select ${size} Yard Skip`}
        >
          {isActive ? "Selected" : "Select This Skip"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkipCard;
