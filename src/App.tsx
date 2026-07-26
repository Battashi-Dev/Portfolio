import { Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ProjectCards from "./Components/ProjectCards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import SkillSection from "./Components/SkillSection";
import FooterSection from "./Components/FooterSection";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Box p={3} minH="100vh" overflowX="hidden">
          <Box py={4} px={6}>
            <NavBar />
          </Box>
          <Box as="main" px={6} w="full">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <AboutSection /> <SkillSection />
                    <FooterSection />
                  </>
                }
              />
              <Route path="/projects" element={<ProjectCards />} />
            </Routes>
          </Box>
        </Box>
      </main>
    </BrowserRouter>
  );
}

export default App;
