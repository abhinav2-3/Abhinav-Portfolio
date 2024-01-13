import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Sidebar from "./Components/Sidebar/SideBar";
import TechStacks from "./Components/TechStacks";
import { projectData, miniProjectsData } from "./Components/utils/data";

function App() {
  const data = projectData;
  console.log(data);
  return (
    <div className="w-full  h-full bg-l_primary dark:bg-d_primary">
      <div className="flex relative">
        <div className="fixed z-50">
          <Sidebar />
        </div>
        <main className="relative flex-1 sm:pl-[263px]">
          <Header />
          <Hero />
          <div className="p-4">
            <Projects title={"Projects"} data={data} />
            <TechStacks />
            <About />
            <Projects title={"Mini Projects"} data={miniProjectsData} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
