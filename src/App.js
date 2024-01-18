import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Routes from "./Routes/Routes";
import AuthContextProvider from "./providers/AuthContextProvider/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      {" "}
      <Routes>
        <Home></Home>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
