import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import Switch from "./ui/switch";

interface ThemeSwitchProps {
  className?: string;
}
const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(theme === "dark");

  const onChange = () => {
    setIsChecked(!isChecked);
    isChecked ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <Switch
        className={className}
        isChecked={isChecked}
        CheckedIcon={Moon}
        UncheckedIcon={Sun}
        onChange={onChange}
      />
    </>
  );
};

export default ThemeSwitch;
