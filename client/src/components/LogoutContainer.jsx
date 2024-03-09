import { FaCaretDown, FaUser, FaUserCircle } from 'react-icons/fa';

import Wrapper from '../assets/wrappers/LogoutContainer';
import { useDashboardContext } from '../pages/DashboardLayout';
import { useState } from 'react';

function LogoutContainer() {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logout } = useDashboardContext();
  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={() => setShowLogout((prev) => !prev)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' className='dropdown-btn' onClick={logout}>
          <FaUser />
          Logout
        </button>
      </div>
    </Wrapper>
  );
}

export default LogoutContainer;
