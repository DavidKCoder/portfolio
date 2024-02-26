import React, { useEffect } from "react";
import { Toggle } from 'rsuite';
import MoonIcon from '@rsuite/icons/legacy/MoonO';
import SunIcon from '@rsuite/icons/legacy/SunO';
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(theme === "dark" ? "dark" : 'light')
  }, [])

  const handleToggle = (isDark) => {
    setTheme(isDark ? "dark" : 'light')
  };


  return (
    <Toggle
      className="toggle"
      size="lg"
      checked={theme === "dark"}
      checkedChildren={<MoonIcon/>}
      unCheckedChildren={<SunIcon/>}
      onChange={handleToggle}
    />
  )
}

export default ThemeToggle;