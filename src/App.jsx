import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Sidebar from "./Components/Sidebar/SideBar";
import TechStacks from "./Components/TechStacks";

function App() {
  return (
    <div className="w-full  h-full bg-l_primary dark:bg-d_primary">
      <div className="flex relative">
        <div className="fixed border-[1px]">
          <Sidebar />
        </div>
        <main className="border-[2px] relative flex-1 sm:pl-[263px]">
          <Header />
          <Hero />
          <div className="border-[1px] p-4">
            <Projects />
            <TechStacks />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
