import { Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <main>
      <Box p={3} bg="gray.900" minH="100vh">
        <Box>
          <NavBar />
        </Box>
        <Box>
          <HeroSection />
        </Box>
      </Box>
    </main>
  );
}

export default App;
