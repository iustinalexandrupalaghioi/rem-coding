import { useEffect, useState } from "react";
import PageTitle from "./components/PageTitle";
import SkipsGrid from "./components/SkipsGrid";
import ThemeSwitch from "./components/ThemeSwitch";
import Drawer from "./components/ui/drawer";
import { useAppContext } from "./contexts/AppContext";
import Stepper from "./components/ui/stepper";
import DrawerContent from "./components/DrawerContent";

function App() {
  const { skip, currentStep, steps } = useAppContext();
  const [open, setOpen] = useState<boolean>(currentStep === 2 || !!skip);

  useEffect(() => {
    setOpen(currentStep !== 2 || !!skip);
  }, [skip, currentStep]);

  return (
    <div className="min-h-screen transition-colors duration-150 bg-white text-black dark:bg-gray-900 dark:text-white ">
      <ThemeSwitch className="py-4 px-2" />
      <div className="container mx-auto flex justify-center px-4 py-8">
        <Stepper currentStep={currentStep} steps={steps} />
      </div>
      {currentStep === 2 ? (
        <main>
          <PageTitle />
          <section className="container mx-auto py-10 pb-12">
            <SkipsGrid setDrawerOpen={setOpen} />
          </section>
        </main>
      ) : null}
      <Drawer open={open} setOpen={setOpen}>
        <DrawerContent />
      </Drawer>
    </div>
  );
}

export default App;
