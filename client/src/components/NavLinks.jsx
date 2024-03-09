import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';

function NavLinks({ isBigSidebar }) {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { path, text, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className={'nav-link'}
            onClick={isBigSidebar ? null : toggleSidebar}
          >
            <span className={'icon'}>{icon}</span>
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
