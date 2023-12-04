import "./App.css";
import Compliments from "./components/Body/Compliments/Compliments";
import FromTheHeart from "./components/Body/From-The-Heart/From-The-Heart";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <FromTheHeart/>
      <Compliments/>
    </>
  );
}

export default App;
