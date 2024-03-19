
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './Dashboard';
import LevelStepper from './LevelStepper';
import { Dao } from "./Dao";

function Main() {
  return (
    <ChakraProvider>
      <div>
        <h1>DAPP</h1>
        <LevelStepper/>
        <Dashboard />
        <Dao />
      </div>
    </ChakraProvider>
  );
}

export default Main;

