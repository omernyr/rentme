import './App.scss';
import Container from './components/Container';
import { RentProvider } from "./context/RentContext";

function App() {
  return (
    <RentProvider>
      <Container />
    </RentProvider>
  );
}

export default App;
