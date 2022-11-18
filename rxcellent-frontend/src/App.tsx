import './App.css';
import Navbar from './components/navbar/navbar';

import Banner from './pages/shopping/components/banner';

function App() {
    return (
        <div className="App">
            {/* <header className="App-header"> */}
            <div className="body">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            {/* </header> */}
        </div>
    );
}

export default App;
