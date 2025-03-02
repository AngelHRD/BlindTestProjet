import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChoiceGenrePage from './pages/ChoiceGenrePage';
import ExplorePage from './pages/ExplorePage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/genre' element={<ChoiceGenrePage />} />
                    <Route path='/genre/:genre' element={<ExplorePage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
