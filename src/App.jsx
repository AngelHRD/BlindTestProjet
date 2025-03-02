import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChoiceGenrePage from './pages/ChoiceGenrePage';
import GenrePage from './pages/GenrePage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/genres' element={<ChoiceGenrePage />} />
                    <Route path='/genres/:name' element={<GenrePage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
