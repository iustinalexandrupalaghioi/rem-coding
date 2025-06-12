import { useAppContext } from "../contexts/AppContext";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";

const DrawerContent = () => {
  const { skip, currentStep, steps, setSkip, setCurrentStep } = useAppContext();
  return (
    <div className="container mx-auto h-full flex justify-between max-w-7xl">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {skip && (
          <>
            <p className="text-xl">{skip?.size} Yard Skip</p>
            <h2 className="text-4xl font-bold text-blue-600">£{skip?.price}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              {skip?.hire_period_days} day hire period
            </p>
          </>
        )}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <Button
          onClick={() => {
            setSkip(undefined);
            setCurrentStep((currentStep) => currentStep - 1);
          }}
        >
          Back
        </Button>
        <Button
          variant="primary"
          iconRight={<ArrowRight className="h-5 w-5" />}
          onClick={() =>
            setCurrentStep((currentStep) =>
              currentStep === steps.length - 1 ? 0 : currentStep + 1
            )
          }
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default DrawerContent;
