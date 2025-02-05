import './App.css';

// components
// import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <main>
      <Button className='button'>A Button</Button>
      <Button className='button' href='http://goole.com'>
        A Link
      </Button>
    </main>
  );
}

export default App;
