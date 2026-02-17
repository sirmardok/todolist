import React from "react"
import { useEffect, useState } from 'react'

const HeaderComponent = () => {

     const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://localhost:5173" className="navbar-brand">
                            Gestión de Tareas
                        </a>                        
                    </div>                                                          
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-ligh float-end">
                <div>
                     <button className="btn btn-primary" onClick={toggleTheme}>
                        Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
                        </button>   
                    </div> 
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent