import { Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ProjectCards from "./Components/ProjectCards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import SkillSection from "./Components/SkillSection";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Box p={3} bg="gray.900" minH="100vh">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection /> <SkillSection />
                </>
              }
            />
            <Route path="/projects" element={<ProjectCards />} />
          </Routes>
        </Box>
      </main>
    </BrowserRouter>
  );
}

export default App;
