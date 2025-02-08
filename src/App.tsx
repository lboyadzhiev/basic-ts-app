import './App.css';

// components
import Input from './components/Input';
// import Button from './components/Button';
// import Container from './components/Container';
import { useRef } from 'react';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input label='Test' id='test' ref={inputRef} />
    </main>
  );
}

export default App;
