import AddDate from './AddDate'
import APODFlex from './APODFlex'
import { useState } from "react";


const Container = ( {data, API}) => {

  const [AddList, setAddList] = useState([{Add: ''}])

  const handleAddToList = () => {
    setAddList([...AddList, {Add: ''}])
  }

  const handleRemoveFromList = (index) => {
    const list = [...AddList]
    list.splice(index, 1)
    setAddList(list)
  }

  return (
    <div className='flexContainer'>
        <APODFlex data={data}/>
        {AddList.map((singleAdd,index) => (
            <div key={index}>
                <AddDate API={API}/>
                {AddList.length > 1 && 
                    <button type='button' className='btn addBtn' onClick={() => handleRemoveFromList(index)}>Remove Image</button>
                }
                {AddList.length - 1 === index && 
                    <button type='button' className='btn addBtn' onClick={handleAddToList}>Add Another Image</button>
                }
            </div>
        ))}
    </div>
  )
}

export default Container
