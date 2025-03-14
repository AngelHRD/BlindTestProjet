import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChoiceGenrePage from './pages/ChoiceGenrePage';
import GenrePage from './pages/GenrePage';
import MainLayout from './layouts/MainLayout';
import PlayGamePage from './pages/PlayGamePage';
import ErrorPage from './pages/ErrorPage';
import ScorePage from './pages/ScorePage';
import ScrollToTop from './providers/ScrollToTop';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/genres' element={<ChoiceGenrePage />} />
                        <Route path='/genres/:name' element={<GenrePage />} />
                        <Route path='/genres/:name/blind-test' element={<PlayGamePage />} />
                        <Route path='/genres/:name/blind-test/score' element={<ScorePage />} />
                    </Route>
                    <Route path='/*' element={<ErrorPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
