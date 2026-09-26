import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path) => {
    navigate(path);
    const id = path.split("#")[1];
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const goHome = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-row justify-between py-3 px-9 bg-base-100 border-[1px] border-[#bbb] rounded-full">
      <Link to="/" onClick={goHome} className="icon flex flex-col items-center gap-1">
        <lord-icon
          src="https://cdn.lordicon.com/osuxyevn.json"
          trigger="hover"
          class="current-color"
          style={{ width: "24px", height: "24px" }}
        ></lord-icon>
        <span className="text-xs">Home</span>
      </Link>
      <a
        href="https://docs.google.com/document/d/1GnxHvW-IE0QFQ_PMLrkawgjqr3iFsMzI/edit"
        target="_blank"
        rel="noreferrer"
        className="icon flex flex-col items-center gap-1"
      >
        <lord-icon
          src="https://cdn.lordicon.com/winbdcbm.json"
          trigger="hover"
          class="current-color"
          style={{ width: "24px", height: "24px" }}
        ></lord-icon>
        <span className="text-xs">Resume</span>
      </a>
      {/* <Link to='/blogs' className='icon flex flex-col items-center gap-1'>
                <lord-icon
                    src="https://cdn.lordicon.com/vufjamqa.json"
                    trigger="hover"
                    class="current-color"
                    style={{ width: "24px", height: "24px" }}>
                </lord-icon>
                <span className='text-xs'>Blogs</span>
            </Link> */}
      <button
        onClick={() => goTo("/#skills")}
        className="icon flex flex-col items-center gap-1"
      >
        <lord-icon
          src="https://cdn.lordicon.com/svbmmyue.json"
          trigger="hover"
          class="current-color"
          style={{ width: "24px", height: "24px" }}
        ></lord-icon>
        <span className="text-xs">Skills</span>
      </button>
      <button
        onClick={() => goTo("/#projects")}
        className="icon flex flex-col items-center gap-1"
      >
        <lord-icon
          src="https://cdn.lordicon.com/fpmskzsv.json"
          trigger="hover"
          class="current-color"
          style={{ width: "24px", height: "24px" }}
        ></lord-icon>
        <span className="text-xs">Projects</span>
      </button>
    </div>
  );
};

export default MobileNav;
