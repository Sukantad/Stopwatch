import "./App.css";
import Timer from "./Timer";
import { Box } from "@chakra-ui/react";

function App() {

  return (
    <Box backgroundImage={'https://images.all-free-download.com/images/graphiclarge/background_beautiful_beauty_269109.jpg'}
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
