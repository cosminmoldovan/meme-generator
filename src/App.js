import Navbar from './components/Navbar';
import Meme from './components/Meme'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main className='main'>
        <Meme />
      </main>
      
    </div>
  );
}

export default App;
