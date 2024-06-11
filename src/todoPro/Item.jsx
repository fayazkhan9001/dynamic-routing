import React from 'react'

const Item = () => {
  return (
    <div className='flex justify-between w-[250px] my-2 rounded-[10px] px-2 bg-slate-300 mx-auto'>
        <p>item</p>

        <div>
            <button onClick={handleClick} className='me-2'>edit</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    </div>
  )
}

export default Item