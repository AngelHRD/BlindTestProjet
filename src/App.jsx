import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Component from './components/Component';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Component />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
