import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChoiceGenrePage from './pages/ChoiceGenrePage';
import GenrePage from './pages/GenrePage';
import MainLayout from './layouts/MainLayout';
import PlayGamePage from './pages/PlayGamePage';
import ErrorPage from './pages/ErrorPage';
import ScorePage from './pages/ScorePage';
import ScrollToTop from './utils/ScrollToTop';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AccountPage from './pages/auth/AccountPage';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Homepage />} />

                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/compte' element={<AccountPage />} />

                        <Route path='/genres' element={<ChoiceGenrePage />} />
                        <Route path='/genres/:name' element={<GenrePage />} />
                        <Route path='/genres/:name/blind-test' element={<PlayGamePage />} />
                        <Route path='/genres/:name/blind-test/score' element={<ScorePage />} />

                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                    <Route path='/error' element={<ErrorPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
