import { createContext, useState } from 'react';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('dark');
    };

    const value = {
        theme,
        toggleTheme,
    };

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

export default LayoutProvider;
