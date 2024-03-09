import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { createContext, useContext, useState } from 'react';

import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard.js';
import { checkDefaultTheme } from '../App.jsx';

const DashboardContext = createContext();

function DashboardLayout() {
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;

    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    // console.log("toggle sidebar");
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async () => {
    console.log('logout');
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboardContext must be used within DashboardContext');
  }
  return context;
};
export default DashboardLayout;
