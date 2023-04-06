import "./style.css";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

function Menu({ children }) {
  const menuRef = useRef();
  const [clickedInside, setClickedOuside] = useState(false);

  useEffect(() => {
    function handleMouseDown(event) {
      console.log("clicked");
      if (menuRef.current !== null && event.target !== null && !menuRef.current.contains(event.target)) {
        setClickedOuside(true);
      } else {
        setClickedOuside(false);
      }
    }


    document.addEventListener("mousedown", handleMouseDown);
  }, []);
  return (
    <div
      ref={menuRef}
      className={classNames("menu", {
        clicked: !clickedInside,
      })}
    >
      {children}
    </div>
  );
}

export default Menu;
