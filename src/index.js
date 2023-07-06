import "./style.css";

const greet = () => {
  const root = document.querySelector(".root");

  root.innerHTML = "<h1>Welcome to Webpack Tutorials</h1>";
};

greet();
