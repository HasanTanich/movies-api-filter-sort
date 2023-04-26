import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="flex items-center h-20 gap-8 text-blue-500 border border-gray-300">
      <NavLink to="/" className="flex self-stretch ml-8 place-items-center">
          Home
      </NavLink>
      <NavLink to="/movies" className="flex self-stretch ml-8 place-items-center">
          Movies
      </NavLink>
    </div>
  );
}

export default Header;
