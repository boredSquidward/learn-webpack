import "./style.css";
import img from "./assets/img.jpeg";

const greet = () => {
  const [root] = document.getElementsByTagName("body");

  const myImg = new Image();
  myImg.src = img;

  root.innerHTML = "<h1>Welcome to Webpack Tutorials</h1>";
  root.appendChild(myImg);
};

greet();
