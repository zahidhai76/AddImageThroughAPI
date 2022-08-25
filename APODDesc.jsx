const APODDesc = ( {data} ) => {
  return (
    <div  id='explanation'>
        { data.date && <h1>Astronomy Picture from {data.date}</h1>}
        {data.explanation}
    </div>
  )
}

export default APODDesc
