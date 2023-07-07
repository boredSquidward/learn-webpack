import "./style.css";
import img from "./assets/img.jpeg";
import { onClickBtn } from "./btn";

const greet = () => {
  const [root] = document.getElementsByTagName("body");

  const myImg = new Image();

  myImg.src = img;

  myImg.alt = "img";

  root.innerHTML = "<h1>Welcome to Webpack Tutorials</h1>";

  root.appendChild(myImg);

  const btn = root.appendChild(document.createElement("button"));

  btn.innerHTML = "Click Me";

  btn.onclick = onClickBtn;
};

greet();
