import Results from "./components/Results";
import Search from "./components/Search";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <div className="min-h-screen flex bg-blue">
        <div className="w-full pl-16 pr-16 pt-8 pb-8 flex flex-col h-screen">
          <TopBar />
          <Search />
          <Results className="flex-1"/>
        </div>
      </div>
    </>
  );
}

export default App;
