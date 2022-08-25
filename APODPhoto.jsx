const APODPhoto = ( {data} ) => {
    const sectionStyle = {
    marginBottom: '16px',
    maxWidth: '100%',
    height: 'auto'
    };

  return (
    <div className='APOD'>
        <img
         style={sectionStyle}
         src={data.url}
         alt={data.title}
       />
    </div>
  )
}

export default APODPhoto
