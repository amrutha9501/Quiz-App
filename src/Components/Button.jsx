import React from 'react'

const Button = ({ onClick, disabled, value }) => {

    const btnClass = "px-4 py-2 rounded-md bg-[#646cff] hover:bg-[#747bff] transition disabled:opacity-50 disabled:cursor-not-allowed";
    
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={btnClass}
        >
            {value}
        </button>
    )
}

export default Button