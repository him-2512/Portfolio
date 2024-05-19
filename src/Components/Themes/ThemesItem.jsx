import React from 'react'

function ThemesItem({ color, img, changeColor }) {
    return (
        <img src={img} className="theme-img" onClick={() => { changeColor(color) }} />
    )
}

export default ThemesItem;
