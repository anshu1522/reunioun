import Filter from "./components/Filter";
import Header from "./components/header";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
    <div className="container">
      <Header />
      <Search/>
      <Filter />
    </div>
    </div>
  );
}

export default App;
