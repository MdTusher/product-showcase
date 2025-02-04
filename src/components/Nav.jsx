import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useGlobalContext } from "../context";

const Nav = () => {
  const { sidebarOpen } = useGlobalContext();
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="header logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-[#595959] "
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            height={25}
            width={25}
            onClick={sidebarOpen}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
