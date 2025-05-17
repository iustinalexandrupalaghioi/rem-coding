import { cn } from "../../utilities/cn";

interface DrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const Drawer = ({ open, children }: DrawerProps) => {
  return (
    <aside
      id="dialog-bottom"
      className="relative z-10"
      aria-labelledby="slide-over"
      aria-modal="true"
    >
      <div className="absolute">
        <div className={"fixed max-w-full inset-x-0 bottom-0"}>
          <div
            className={cn(
              "relative w-full transform transition ease-in-out duration-500",
              { "translate-y-full": !open },
              { "translate-y-0": open }
            )}
          >
            <div className="flex flex-col h-full overflow-y-hidden bg-gray-50 p-10 shadow-xl dark:bg-gray-800">
              {children}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Drawer;
