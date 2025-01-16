import Navbar from "./components/navbar";
import Main from "./components/main";
import Projects from "./components/project";
import Skills from "./components/skills";
import Contact from "./components/contact";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
