import { navLinks } from "../constants";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { openSidebar, sidebarClose } = useGlobalContext();
  return (
    <div
      className={`${
        openSidebar
          ? "absolute inset-0 z-40 bg-slate-800 bg-opacity-50 max-w-full min-h-full"
          : "hidden"
      }`}
    >
      <aside className="relative mx-auto mt-16  w-full max-w-sm min-h-fit pb-8 rounded-lg shadow-lg bg-slate-100">
        <button
          className="absolute top-4 right-8 font-bold text-2xl text-slate-600 rounded-full hover:text-red-400"
          onClick={sidebarClose}
        >
          X
        </button>
        <ul className="pt-14 flex flex-col gap-4 items-center">
          {navLinks.map((link) => {
            return (
              <li className="px-24 hover:shadow-md" key={link.id}>
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
      </aside>
    </div>
  );
};

export default Sidebar;
