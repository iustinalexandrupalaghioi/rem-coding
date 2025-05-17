import {
  Calendar,
  CreditCard,
  MapPin,
  ShieldCheck,
  Trash2,
  Truck,
} from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Skip } from "../entities/Skip";

const steps = [
  {
    title: "Postcode",
    Icon: MapPin,
  },
  {
    title: "Waste Type",
    Icon: Trash2,
  },
  {
    title: "Select Skip",
    Icon: Truck,
  },
  {
    title: "Permit Check",
    Icon: ShieldCheck,
  },
  {
    title: "Choose Date",
    Icon: Calendar,
  },
  {
    title: "Payment",
    Icon: CreditCard,
  },
];

interface AppContextType {
  skip: Skip | undefined;
  setSkip: Dispatch<SetStateAction<Skip | undefined>>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  steps: typeof steps;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [skip, setSkip] = useState<Skip | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState(2);

  useEffect(() => {
    const bookedSkip = localStorage.getItem("booked-skip");
    if (bookedSkip) {
      setSkip(JSON.parse(bookedSkip));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("booked-skip", skip ? JSON.stringify(skip) : "");
  }, [skip]);
  return (
    <AppContext.Provider
      value={{ steps, currentStep, setCurrentStep, skip, setSkip }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
