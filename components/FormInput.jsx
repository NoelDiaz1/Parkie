import React, { useState } from 'react'
import Popup from './Popup'
import PreviousPages from "./PreviousPages"

const FormInput = ({
    formData,
    handleSubmit,
    handleChange,
    handleRadioChecked,
    handleOtherOptionChecked,
    isChecked,
    isCheckedOtherOption,
    setIsChecked,
    popup,
    setPopup,
    generateSentence,
    submittedSentence,
    setSubmittedSentence,
    toggleNew,
    togglePreviousPages,
    showHistoryPage,
    setShowHistoryPage
}) => {
    
    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div>
                    <label className="label">Borough Group:</label>
                        <input 
                            type="text" 
                            placeholder="Borough"
                            onChange={handleChange}
                            name="boroughGroup"
                            className="inputBoxes"
                            value={formData.boroughGroup}
                            required
                            >
                       </input>
                       
                    <label className="label">Employee's Title:</label>
                        <input 
                            type="text" 
                            placeholder="Title"
                            onChange={handleChange}
                            name="employeeTitle"
                            className="inputBoxes"
                            value={formData.employeeTitle}
                            required
                            >
                        </input>
                            
                    <label className="label">Name:</label>
                        <input 
                            type="text" 
                            placeholder="Name"
                            onChange={handleChange}
                            name="name"
                            className="inputBoxes"
                            value={formData.name}
                            required
                            >
                        </input>
                    
                    <label className="label">Date:</label>
                        <input
                            type="date" 
                            placeholder="Title"
                            onChange={handleChange}
                            name="date"
                            className="inputBoxes"
                            value={formData.date}
                            required
                            >
                        </input>
                            
                    <label className="label">Time:</label>
                        <input 
                            type="time" 
                            onChange={handleChange}
                            name="time"
                            className="inputBoxes"
                            value={formData.time}
                            required
                            >
                        </input>
                            
                    <div className="bottom-container">
                        <label className="label" htmlFor="pools">Select a pool:</label>
                            <select 
                                name="pools" 
                                className="pools"
                                onChange={handleChange}
                                required
                                >
                                <optgroup label="Brooklyn">
                                    <option value="N/A">--------- Select Pool ---------</option>
                                    <option value="BETSY HEAD POOL">Betsy Head Pool</option>
                                    <option value="BUSHWICK POOL">Bushwick Pool</option>
                                    <option value="COMMODORE BARRY POOL">Commodore Barry Pool</option>
                                    <option value="DAVID FOX/PS 251 POOL">David Fox/PS 251 Pool</option>
                                    <option value="DOUGLASS AND DEGRAW POOL">Douglass and DeGraw Pool</option>
                                    <option value="GLENWOOD HOUSES POOL">Glenwood Houses Pool</option>
                                    <option value="HOWARD POOL">Howard Pool</option>
                                    <option value="JESSE OWENS POOL">Jesse Owens Pool</option>
                                    <option value="KOSCIUSZKO POOL">Kosciuszko Pool</option>
                                    <option value="LINDOWER PARK POOL">Lindower Park Pool</option>
                                    <option value="MCCARREN PARK POOL">McCarren Park Pool</option>
                                    <option value="ADELPHI MINI POOL">Adelphi Mini Pool</option>
                                    <option value="RED HOOK POOL">Red Hook Pool</option>
                                    <option value="SUNSET PARK POOL">Sunset Park Pool</option>
                                </optgroup>
                                <optgroup label="Manhattan">
                                    <option value="ABRAHAM LINCOLN POOL">Abraham Lincoln Pool</option>
                                    <option value="ASSER LEVY POOL">Asser Levy Pool</option>
                                    <option value="DRY DOCK POOL">Dry Dock Pool</option>
                                    <option value="FREDERICK DOUGLASS POOL">Frederick Douglass Pool</option>
                                    <option value="HAMILTON FISH POOL">Hamilton Fish Pool</option>
                                    <option value="HARLEM MEER CENTER">Harlem Meer Center</option>
                                    <option value="HIGHBRIDGE POOL">Highbridge Pool</option>
                                    <option value="JACKIE ROBINSON POOL">Jackie Robinson Pool</option>
                                    <option value="JOHN JAY POOL">John Jay Pool</option>
                                    <option value="MARCUS GARVEY POOL">Marcus Garvey Pool</option>
                                    <option value="SHELTERING ARMS POOL">Sheltering Arms Pool</option>
                                    <option value="THOMAS JEFFERSON POOL">Thomas Jefferson Pool</option>
                                    <option value="TOMPKINS SQUARE POOL">Tompkins Square Pool</option>
                                    <option value="TONY DAPOLITO POOL">Tony Dapolito Pool</option>
                                    <option value="VESUVIO POOL">Vesuvio Pool</option>
                                    <option value="WAGNER POOL">Wagner Pool</option>
                                </optgroup>
                                <optgroup label="Bronx">
                                    <option value="CLAREMONT POOL">Claremont Pool</option>
                                    <option value="CROTONA POOL">Crotona Pool</option>
                                    <option value="EDENWALD HOUSES POOL">Edenwald Houses Pool</option>
                                    <option value="FLOATING LADY POOL">Floating Lady Pool</option>
                                    <option value="HUNTS POINT POOL">Hunts Point Pool</option>
                                    <option value="JAMES J. PETERS POOL">James J. Peters Pool</option>
                                    <option value="FOSTER POOL">Foster Pool</option>
                                    <option value="MAPES POOL">Mapes Pool</option>
                                    <option value="OAK HILL POOL">Oak Hill Pool</option>
                                    <option value="ST. MARY'S POOL">St. Mary's Pool</option>
                                    <option value="VAN CORTLANDT POOL">Van Cortlandt Pool</option>
                                    <option value="WATSON GLENN POOL">Watson Glen Pool</option>
                                </optgroup>
                                <optgroup label="Queens">
                                    <option value="ASTORIA POOL">Astoria Pool</option>
                                    <option value="FISHER POOL">Fisher Pool</option>
                                    <option value="FORT TOTTEN POOL">Fort Totten Pool</option>
                                    <option value="LIBERTY POOL">Liberty Pool</option>
                                    <option value="MARIE CURIE PARK POOL">Marie Curie Park Pool</option>
                                    <option value="PS 186 PLAYGROUND POOL">PS 186 Playground Pool</option>
                                    <option value="WINDMULLER POOL">Windmuller Pool</option>
                                </optgroup>
                                <optgroup label="Staten Island">
                                    <option value="FABER POOL">Faber Pool</option>
                                    <option value="GENERAL DOUGLAS POOL">General Douglas Pool</option>
                                    <option value="LYONS POOL">Lyons Pool</option>
                                    <option value="MAGGIE HOWARD POOL">Maggie Howard Pool</option>
                                    <option value="PS 46 PLAYGROUND POOL">PS 46 Playground Pool</option>
                                    <option value="TOTTENVILLE POOL">Tottenville Pool</option>
                                    <option value="WEST BRIGHTON POOL">West Brighton Pool</option>
                                </optgroup>
                                </select>
                                
                            <input 
                                type="number" 
                                placeholder="Capacity %"
                                onChange={handleChange}
                                name="capacity"
                                className="capacityInput"
                                value={formData.capacity}
                                > 
                            </input>
                                
                            <div className="wading-container">
                                <input 
                                    type="radio" 
                                    className="wadingRadio"
                                    value="wading"
                                    name="wading"
                                    onChange={handleChange}
                                    checked={formData.wading === 'wading'}
                                    >
                                </input>
                                <label htmlFor="wading">Wading pool closed?</label>
                            </div>
                            
                            {!isCheckedOtherOption ? (
                                <div className="other-option-container">
                                    <input
                                    type="radio"
                                    className="radios"
                                    name="condition"
                                    value="otherOption"
                                    onChange={handleOtherOptionChecked}
                                    >
                                    </input>
                                    <label htmlFor="otherOption">Condition not listed?</label>
                                </div>
                            ) : (
                                <textarea 
                                    className="other-option-textarea" 
                                    placeholder="A/P reports... finish the page with the condition here"
                                    onChange={handleChange}
                                    name="otherOption"
                                    >
                                </textarea>
                            )}
                        </div>
                            
                        <section className="radios">
                            <p className="radio-header">Select the condition:</p>
                            <input
                                type="radio"
                                className="radios"
                                name="condition"
                                value="open"
                                checked={formData.condition === "open"}
                                onChange={handleChange}
                            >
                            </input>
                            <label htmlFor="open">Open</label>
                                
                            <input
                                type="radio"
                                className="radios"
                                name="condition"
                                value="backOpen"
                                checked={formData.condition === "backOpen"}
                                onChange={handleChange}
                            >
                            </input>
                            <label htmlFor="backOpen">Back Open</label>
                                
                            <input
                                type="radio"
                                className="radios"
                                name="condition"
                                value="max"
                                checked={formData.condition === "max"}
                                onChange={handleChange}
                            >
                            </input>
                            <label htmlFor="max">Pool capacity</label>
                            
                            <br></br>
                                
                            <input
                                type="radio"
                                className="radios"
                                name="condition"
                                value="weather"
                                checked={formData.condition === "weather"}
                                onChange={handleChange}
                            >
                            </input>
                            <label htmlFor="weather">Inclement Weather</label>
                                
                            <input
                                type="radio"
                                className="radios"
                                name="condition"
                                value="category1"
                                checked={formData.condition === "category1"}
                                onChange={handleChange}
                            >
                            </input>
                            <label htmlFor="category1">Category 1</label>
                                                            
                            <input
                                type="radio"
                                className="radios"
                                name="condition"
                                value="category2"
                                checked={formData.condition === "category2"}
                                onChange={handleChange}
                            >
                            </input>
                            <label htmlFor="category2">Category 2</label>
                                
                            <input
                                type="radio"
                                className="radios"
                                name="condition"
                                value="delayedOpening"
                                onChange={handleRadioChecked}
                            >
                            </input>
                            <label htmlFor="delayedOpening">Delayed Opening</label>
                            
                            <input
                                type="radio"
                                className="radios"
                                name="condition"
                                value="chlorineLevels"
                                checked={formData.condition === "chlorineLevels"}
                                onChange={handleChange}
                            >
                            </input>
                            <label htmlFor="category1">Chlorine Levels</label>
                                
                        {isChecked ? (
                            <div className="delayed-container">
                                <p id="delayed-header">Please check one of the following reasons on why the pool is delayed</p>
                                <input 
                                    type="radio"
                                    className="radioDelays"
                                    name="condition"
                                    value="delayNYPD"
                                    onChange={handleChange}
                                    >
                                </input>
                                <label htmlFor="delayNYPD">Due to NYPD?</label>
                                    
                                <input 
                                    type="radio"
                                    className="radioDelays"
                                    name="condition"
                                    value="delayPEP"
                                    onChange={handleChange}
                                    >
                                </input>
                                <label htmlFor="delayPEP">Due to PEP?</label>
                                    
                                <input 
                                    type="radio"
                                    className="radioDelays"
                                    name="condition"
                                    value="delayLifeguards"
                                    onChange={handleChange}
                                    >
                                </input>
                                <label htmlFor="delayLifeguards">Due to Lifeguards?</label>
                            </div>
                                )
                            : null }
                        </section>
                    </div>
                    
                    {!popup ? 
                        <button 
                            className="submitBtn" 
                            type="submit">
                                Submit
                        </button> : " "}
                </form>
                
                {popup && 
                    <Popup 
                        sentence={generateSentence()}
                        toggleNew={toggleNew}
                    />}
         </div>
    )
}

export default FormInput