import APODPhoto from './APODPhoto'
import APODDesc from './APODDesc'

const APODFlex = ( {data} ) => {
  return (
    <div className='APODFlex'>
        <APODPhoto data={data}/>
        <APODDesc data={data}/>
    </div>
  )
}

export default APODFlex
