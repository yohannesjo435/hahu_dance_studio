import React from "react";
import { SquareChevronRight } from "lucide-react";

const Drawer = () => {
  return (
    <div className="z-20">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="outline-1 drawer-button">
            <SquareChevronRight />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <h2 className="text-3xl">Get in touch</h2>
            <hr />
            <p>
              Ready to transform your vision into a digital masterpiece? Were
              eager to hear about your next project and explore how our
              expertise can bring it to life.
            </p>
            <ul>
              <div>
                <label>Phone</label>
                <li>+251011111</li>
              </div>
              <div>
                <label>Email</label>
                <li>+251011111</li>
              </div>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
