import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import { useState } from "react";

function App() {
  const [root, setRoot] = useState(true);
  return (
    <Router>
      <div className="bg-[#141311]">
        <Header setRoot={setRoot}/>
        <div className="container">
          <div className={`flex item-center pb-6 lg:flex-row lg:pt-10 lg:pb-10 lg:gap-16 ${root ? "flex-col" : "flex-col-reverse"}`}>
            <div className="w-full lg:w-[40%] relative">
              <ProfileCard />
            </div>
            <div className="lg:w-[50%]">
              <div className={`${root ? "pt-10" : 'pt-0'} lg:pt-0`}>
                <Routes>
                  <Route path="/Portfolio" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/tools" element={<Tools/>} />
                </Routes>
              </div>
              <div>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
