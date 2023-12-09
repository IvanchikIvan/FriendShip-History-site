import "./App.css";
import Compliments from "./components/Body/Compliments/Compliments";
import FromTheHeart from "./components/Body/From-The-Heart/From-The-Heart";
import Surprise from "./components/Body/Surprise/Surprise";
import Header from "./components/header/Header";
import StatsBox from './components/Body/StatsBox/StatsBox';

function App() {
  return (
    <>
      <Header />
      <FromTheHeart/>
      <Compliments/>
      <Surprise/>
      <StatsBox/>
    </>
  );
}

export default App;
