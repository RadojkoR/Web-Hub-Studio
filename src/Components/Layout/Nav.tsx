import { NavLink } from "react-router"
import NavLogo from "../../assets/Logos/Web Hub Studio Logo - Email Signature.png"

function Nav() {
  return (
    <nav className="w-full flex items-center h-16 z-50 uppercase text-xl text-gray-600 font-semibold">
      <div className="">
        <NavLink to={"/"}>
          <img
            src={NavLogo}
            className="h-10 mx-auto"
            alt="Web Hub Sudio Logo"
          />
        </NavLink>
      </div>
      <ul className="mx-auto flex [&>li>a]:ease-linear [&>li>a]:duration-200">
        <li className="me-8">
          <NavLink
            to={"/"}
            className="
              hover:text-brandColor
              focus:text-brandColor 
              focus:outline-none 
              focus:ring-1
              focus:ring-offset-brandColor
              focus:ring-offset-4"
          >
            Home
          </NavLink>
        </li>
        <li className="me-8 ">
          <NavLink
            to={"/"}
            className="
              hover:text-brandColor
              focus:text-brandColor 
              focus:outline-none 
              focus:ring-1
              focus:ring-offset-brandColor
              focus:ring-offset-4"
          >
            Services
          </NavLink>
        </li>
        <li className="me-8">
          <NavLink
            to={"/"}
            className="
              hover:text-brandColor
              focus:text-brandColor 
              focus:outline-none 
              focus:ring-1
              focus:ring-offset-brandColor
              focus:ring-offset-4"
          >
            Projects
          </NavLink>
        </li>
        <li className="me-8">
          <NavLink
            to={"/"}
            className="
              hover:text-brandColor
              focus:text-brandColor 
              focus:outline-none 
              focus:ring-1
              focus:ring-offset-brandColor
              focus:ring-offset-4"
          >
            Contact
          </NavLink>
          <li>
            
          </li>
        </li>
      </ul>
    </nav>
  );
}

export default Nav