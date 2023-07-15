import React, { useState } from "react"
import Home from "./Home"

const PreviousPage = ({
    togglePreviousPages,
    sentences
}) => {
    
    return (
        <div>
            <button 
                className="previous-page-btn" 
                onClick={togglePreviousPages}>
                    Back To Home
            </button>
            
            {sentences.map((sentence) => {
               return <ul><li>{sentence}</li></ul> 
            })}
        </div>
    )
}

export default PreviousPage