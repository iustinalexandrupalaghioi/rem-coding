import { Fragment } from "react/jsx-runtime";
import type { Step } from "../../entities/Step";

interface StepperProps {
  currentStep: number;
  steps: Step[];
}

const Stepper = ({ currentStep, steps }: StepperProps) => {
  const activeColor = (index: number) =>
    currentStep >= index && "text-blue-500";
  const activeBackground = (index: number) =>
    currentStep >= index ? "bg-blue-500" : "bg-gray-300";

  const isFinalStep = (index: number) => index === steps.length - 1;

  return (
    <div className="flex items-center overflow-x-auto">
      <div className="flex items-center">
        {steps.map(({ title, Icon }, index) => (
          <Fragment key={index}>
            <div
              className={`cursor-pointer flex items-center whitespace-nowrap py-4 gap-2 ${activeColor(
                index
              )}`}
            >
              <Icon className="h-6 w-6" />
              {title}
            </div>
            {isFinalStep(index) ? null : (
              <div
                className={`w-24 h-1 mx-4 ${activeBackground(index + 1)}`}
              ></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
