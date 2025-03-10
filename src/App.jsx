import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChoiceGenrePage from './pages/ChoiceGenrePage';
import GenrePage from './pages/GenrePage';
import MainLayout from './layouts/MainLayout';
import PlayGamePage from './pages/PlayGamePage';
import ErrorPage from './pages/ErrorPage';

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
                    </Route>
                    {/* Page error */}
                    <Route path='/404' element={<ErrorPage />} />
                    <Route path='*' element={<Navigate to='/404' replace />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
