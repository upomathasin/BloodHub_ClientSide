import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Routes from "./Routes/Routes";
import AuthContextProvider from "./providers/AuthContextProvider/AuthContextProvider";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <AuthContextProvider>
      {" "}
      <ParallaxProvider>
        {" "}
        <Routes></Routes>
      </ParallaxProvider>
    </AuthContextProvider>
  );
}

export default App;
