import React, { useEffect, useState } from 'react'
import { themes } from '../../data'
import ThemesItem from './ThemesItem'
import { FaCog } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import './themes.css'

const getStorageColor = () => {
    let color = 'hsl(271, 76%, 53%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }

    return color;
};

const getStorageTheme = () => {
    let theme = 'dark-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }

    return theme;
};


function Themes() {

    const [show, setShow] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme);

    const changeColor = (color) => {
        setColor(color);
    };

    const toggleTheme = () => {
        if (theme == 'light-theme') {
            setTheme('dark-theme');
        }
        else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color])


    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);

    }, [theme])

    return (
        <>
            <div className={`${show ? 'show-switch' : ''} style-switch`}>
                <div className="style-switch-toggle" onClick={() => { setShow(!show) }}>
                    <FaCog />
                </div>

                <div className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>

                <h3 className="style-switch-title">
                    Style Switcher
                </h3>

                <div className="style-switch-items">
                    {themes.map((theme, index) => {
                        return (
                            <ThemesItem key={index} {...theme} changeColor={changeColor} />
                        )
                    })}
                </div>

                <div className="style-switch-close" onClick={() => setShow(!show)}>
                    &times;
                </div>
            </div>
        </>
    )
}

export default Themes;
