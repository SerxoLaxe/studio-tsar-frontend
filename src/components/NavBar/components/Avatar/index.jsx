import { useState } from "react";
import './style.css'

function Avatar() {
  const [image, setImage] = useState("");
  const [userName, setUsername] = useState("X");
  return (
    <div className="avatar">
      <img src={image} />
      <p>{userName}</p>
    </div>
  );
}
export default Avatar;
