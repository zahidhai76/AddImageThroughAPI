import { useState, useRef } from 'react'
import APODFlex from './APODFlex'

const AddDate = ( {API} ) => {
    const [Date, setDate] = useState('')
    const[newImage, setnewImage] = useState([])
    const inputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        setDate(inputRef.current.value)

        if(!inputRef.current.value) {
            alert('Please input a date')
            return
        }
        const date = inputRef.current.value
        AddPhoto (date)
    }

    const AddPhoto = (date) => {
      fetchPhoto(date)
  
      async function fetchPhoto(date) {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API}`)
        const data = await response.json()
        setnewImage(data)
    }
    }

    const sectionStyle = {
        marginBottom: '16px',
        maxWidth: '100%',
        height: 'auto'
        };
    

  return (
    <div className='form-control'>
        <form className='add-form' onSubmit={submitHandler}>
            <label>Date</label>
                <input 
                    type='date' 
                    placeholder='Add Date' 
                    ref = {inputRef}
                />
            <input type='submit' value='Add Image' className='btn'/>
        </form>
        <APODFlex data={newImage}/>
    </div>
  )
}

export default AddDate
