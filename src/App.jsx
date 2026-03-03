import Search from "./components/Search";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <div className="min-h-screen flex bg-blue">
        <div className="w-full p-8">
          <TopBar />
          <Search />
        </div>
      </div>
    </>
  );
}

export default App;
