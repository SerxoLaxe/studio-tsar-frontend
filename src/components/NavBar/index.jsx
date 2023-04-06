import { Menu, Avatar } from "./components";
import "./style.css";
import Button from "../Button";


function NavBar() {
  
  return (
    <div className="navbar">
      <Menu>
        <Button text="File" />
        <Button text="Edit" />
        <Button text="Selection" />
        <Button text="View" />
        <Button text="Terminal" />
      </Menu>
      <Avatar />
    </div>
  );
}

export default NavBar;
