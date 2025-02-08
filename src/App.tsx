import './App.css';

// components
import Input from './components/Input';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };

    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
