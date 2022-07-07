import React from 'react'

const SearchResult = ({img, status, metaURI}) => {
  return (
    <div className='w-[100vh] border-2 h-[55vh] bg-white'>
        <img src={img} alt="" className='w-96 h-96 border-2'/>
    </div>
  )
}

export default SearchResult