import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const navItems = [
    { name: 'About Me', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' }
  ];

  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className={location.pathname === item.path ? 'active' : ''}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;


  


  