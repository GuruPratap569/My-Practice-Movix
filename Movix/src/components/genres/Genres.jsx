import React from 'react'
import "./style.scss"
import { useSelector } from 'react-redux'


const Genres = ({data}) => {

const {genres} = useSelector((state) => state.home)

return <div className='genres'>
    {data?.map((g) => {
        if(!genres[g]?.name) return;  //for safety
        return(
            <div key={g} className='genre'>
                {genres[g]?.name}
            </div>
        )
    })}
</div>



  return (
    <div>Genres</div>
  )
}

export default Genres 