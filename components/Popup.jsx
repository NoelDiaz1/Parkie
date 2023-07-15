import React from 'react'

const Popup = ({sentence, toggleNew}) => {
    return  (
        <div className="popup-container">
            <div className="popup-content">
                <h1 className="submittedSentence">{sentence}</h1>
                <button className="createNewBtn" onClick={toggleNew}>Create New</button>
            </div>
        </div>
    )
}

export default Popup