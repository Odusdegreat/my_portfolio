import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="flex flex-row justify-between py-3 px-9 bg-base-100 border-[1px] border-[#bbb] rounded-full">
      <Link to="/" className="icon flex flex-col items-center gap-1">
        <lord-icon
          src="https://cdn.lordicon.com/osuxyevn.json"
          trigger="hover"
          class="current-color"
          style={{ width: "24px", height: "24px" }}
        ></lord-icon>
        <span className="text-xs">Home</span>
      </Link>
      <a
        href="https://docs.google.com/document/d/1exbVtHR29vz7ALWcVdRg4xx_qeFrnw60fgA_pReKmmE/export?format=pdf"
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
      <Link to="/#skills" className="icon flex flex-col items-center gap-1">
        <lord-icon
          src="https://cdn.lordicon.com/svbmmyue.json"
          trigger="hover"
          class="current-color"
          style={{ width: "24px", height: "24px" }}
        ></lord-icon>
        <span className="text-xs">Skills</span>
      </Link>
      <Link to="/projects" className="icon flex flex-col items-center gap-1">
        <lord-icon
          src="https://cdn.lordicon.com/fpmskzsv.json"
          trigger="hover"
          class="current-color"
          style={{ width: "24px", height: "24px" }}
        ></lord-icon>
        <span className="text-xs">Projects</span>
      </Link>
    </div>
  );
};

export default MobileNav;
