import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChoiceGenrePage from './pages/ChoiceGenrePage';
import GenrePage from './pages/GenrePage';
import MainLayout from './layouts/MainLayout';
import PlayGamePage from './pages/PlayGamePage';
import ScorePage from './pages/ScorePage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/genres' element={<ChoiceGenrePage />} />
                        <Route path='/genres/:name' element={<GenrePage />} />
                        <Route path='/genres/:name/blind-test' element={<PlayGamePage />} />
                        <Route path='/genres/:name/blind-test/score' element={<ScorePage />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
