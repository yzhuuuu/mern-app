import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import Wrapper from '../assets/wrappers/ThemeToggle';
import { useDashboardContext } from '../pages/DashboardLayout';

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
    </Wrapper>
  );
}

export default ThemeToggle;
