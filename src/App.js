import "./App.css";
import Timer from "./Timer";
import { Box } from "@chakra-ui/react";

function App() {

  return (
    bgGradient='linear(to-r, green.200, pink.500)' 
        backgroundRepeat={"no-repeat"}
    backgroundSize="100%"
    backgroundPosition='bottom 10%  center'
    h='100vh'
    w='100%'
    className="App">
        <Timer/>
    </Box>
  );
}

export default App;
