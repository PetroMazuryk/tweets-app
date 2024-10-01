import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";
import { FaSun } from "react-icons/fa";
import { LuMoonStar } from "react-icons/lu";

import { BtnSwitcher, SwitcherWrapper } from "./ThemeSwitcher.styled";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const theme = isDarkMode ? "light" : "dark";

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <SwitcherWrapper>
      <BtnSwitcher onClick={handleThemeToggle}>
        {isDarkMode ? <LuMoonStar size={18} /> : <FaSun size={18} />}
      </BtnSwitcher>
    </SwitcherWrapper>
  );
};

export default ThemeSwitcher;
