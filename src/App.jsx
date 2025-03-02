import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChoiceGenre from './pages/ChoiceGenre';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/genre' element={<ChoiceGenre />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
