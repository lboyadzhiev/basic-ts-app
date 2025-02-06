import './App.css';

// components
// import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';

function App() {
  return (
    <main>
      <Container as={Button}>Click me</Container>
    </main>
  );
}

export default App;
