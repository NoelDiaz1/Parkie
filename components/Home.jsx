import React, { useState } from 'react'
import Popup from './Popup'
import PreviousPages from "./PreviousPages"
import FormInput from './FormInput'

const Home = () => {
    const [submittedSentence, setSubmittedSentence] = useState([])
    const [popup, setPopup] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [isCheckedOtherOption, setIsCheckedOtherOption] = useState(false)
    const [showHistoryPage, setShowHistoryPage] = useState(false)
    const [formData, setFormData] = useState({
        boroughGroup: "" ,
        name: "",
        employeeTitle: "", 
        date: "", 
        time: "",
        pools: "",
        condition: "",
        capacity: "",
        weather: "",
        category1: "",
        category2: "",
        backOpen: "",
        wading: "",
        chlorineLevels: "",
        otherOption: ""
    })
    
    const currentDate = formData.date.split('-')
    const correctDate = `${currentDate[1]}/${currentDate[2]}/${currentDate[0]}`
    
    const currentTime = formData.time
    const newTime = currentTime.replace(":", "")
    
    const sentencePrefix = `${formData.boroughGroup} POOL/LIFEGUARD GRPS-${formData.pools}-${correctDate}-${newTime}HRS: ${formData.employeeTitle} ${formData.name}`

    const handleChange = (event) => {
        setFormData(prevItems => {
            return {
                ...prevItems,
                [event.target.name]: event.target.value
            }
        })
    }
    
    function togglePreviousPages () {
        setShowHistoryPage(!showHistoryPage)
    }
    
    function handleRadioChecked (event) {
        const { checked } = event.target
        setIsChecked(checked)
    }
    
    function handleOtherOptionChecked (event) {
        const { checked } = event.target
        setIsCheckedOtherOption(checked)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setPopup(true)
        const sentence = generateSentence()
        setSubmittedSentence(prevSentence => [...prevSentence, sentence])
    }
    
    function generateSentence () {
        if (formData.condition === 'open' && formData.wading === 'wading') {
            return `${sentencePrefix} reports the pool is open at ${formData.capacity}% capacity and the wading pool is closed due to shortage of lifeguards...`
        
        } else if (formData.condition === 'backOpen' && formData.wading === 'wading') {
            return `${sentencePrefix} reports the pool is now open to the public and the wading pool is closed due to shortage of lifeguards...`
        
        } else if (formData.condition === 'open') {
            return `${sentencePrefix} reports the pool is open at ${formData.capacity}% capacity...`
            
        } else if (formData.condition === 'max') {
            return `${sentencePrefix} reports the pool has reached capacity at ${formData.capacity}% open...`
            
        } else if (formData.condition === 'weather') {
            return `${sentencePrefix} reports the pool is closed due to inclement weather...`
            
        } else if (formData.condition === 'category1') {
            return `${sentencePrefix} reports the pool is temporarily closed due to a category one...`
            
        } else if (formData.condition === 'category2') {
            return `${sentencePrefix} reports the pool is closed due to a category two...`
            
        } else if (formData.condition === 'backOpen') {
            return `*UPDATE* ${sentencePrefix} reports the pool is now open to the public...`
            
        } else if (formData.condition === 'delayNYPD') {
            return `${sentencePrefix} reports the pool will be delayed in opening due to no NYPD on site...`
            
        } else if (formData.condition === 'delayPEP') {
            return `${sentencePrefix} reports the pool will be delayed in opening due to no PEP on site...`
            
        } else if (formData.condition === 'delayLifeguards') {
            return `${sentencePrefix} reports the pool will be delayed in opening due to no Lifeguards on site...`
            
        } else if (formData.condition === 'chlorineLevels') {
            return `${sentencePrefix} reports the pool will be closed due to chlorine levels...`
            
        } else if (formData.otherOption) {
            return `${sentencePrefix} reports ${formData.otherOption}`
        }
    }
    
    function toggleNew () {
        setPopup(false)
        setIsChecked(false)
        setIsCheckedOtherOption(false)
        setFormData((prevData) => ({
            ...prevData,
            wading: "",
            boroughGroup: "" ,
            name: "",
            employeeTitle: "", 
            date: "", 
            time: "",
            pools: "",
            condition: "",
            capacity: "",
            weather: "",
            category1: "",
            category2: "",
            backOpen: "",
            chlorineLevels: "",
            otherOption: ""
        }))
    }
    
    return (
        <div>
            <div className='main-container'>
                <div className='logo-header-text'>
                    <img src="parks-logo.png" className="logo"></img>
                    <h3>This form will generate a Central Communications Email for pools. Please enter the information accurately</h3>
                </div>
                
                {showHistoryPage ? (
                   <div>
                        <PreviousPages 
                        togglePreviousPages={togglePreviousPages}
                        sentences={submittedSentence}
                        />     
                   </div>
               ) : (
                <div>
                   <button 
                    className="previous-page-btn"  
                    onClick={togglePreviousPages}>
                        Previous Pages
                    </button>
                    
                    <FormInput
                     formData={formData}
                     handleChange={handleChange}
                     handleRadioChecked={handleRadioChecked}
                     handleOtherOptionChecked={handleOtherOptionChecked}
                     handleSubmit={handleSubmit}
                     isChecked={isChecked}
                     isCheckedOtherOption={isCheckedOtherOption}
                     setIsChecked={setIsChecked}
                     submittedSentence={submittedSentence}
                     setSubmittedSentence={setSubmittedSentence}
                     popup={popup}
                     setPopup={setPopup}
                     toggleNew={toggleNew}
                     togglePreviousPages={togglePreviousPages}
                     showHistoryPage={showHistoryPage}
                     setShowHistoryPage={setShowHistoryPage}
                     generateSentence={generateSentence}
                />
                </div>
               )
            }
                 
            </div>
        </div>
    )
}

export default Home