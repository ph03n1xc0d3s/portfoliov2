import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <MainContainer />
      <Services />
    </div>
  );
}

export default App;
