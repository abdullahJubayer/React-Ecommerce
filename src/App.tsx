import "./App.css";
import { HeaderBg } from "./components/HeaderBg";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <>
      <NavBar />
      <HeaderBg />
      <div>
        <h2>Obsessive Attention. Intelligent Effort.</h2>
        <h3>
          Functional handbags made of luxurious and honest materials to improve
          people's lives in small but mighty ways.
        </h3>
      </div>
    </>
  );
}
