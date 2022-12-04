import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './pages/shopping/components/banner';

function App() {
    return (
        <div className="App">
            <div className="body">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
}

export default App;
