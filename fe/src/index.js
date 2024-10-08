import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FaFigma } from "react-icons/fa";
import SignInPage from "./pages/SignInPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <a
      href="https://www.figma.com/design/zw7AudlJriu5feL7YHJnE9/FYP-Workshop?node-id=0-1&t=K1i3FrgubB52EQDO-0"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "absolute",
        right: "0.6rem",
        top: "45vh",
        background: "red",
        padding: "8px 10px",
        borderRadius: "50px",
      }}
    >
      <FaFigma color="white" />
    </a>
    <SignInPage />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
