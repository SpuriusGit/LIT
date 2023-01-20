import React from 'react'

const ListItem = ({id, title, body, onDelete}) => {
    const handleDelete = () => {
        onDelete(id);
        console.log(id)
      };
      
  return (
    <li key={id} id={id} className='list-item'>
        <h3>{title}</h3>
        <p className='description'>{body}</p>
        <button onClick={handleDelete}>delete</button>
    </li>
  )
}

export default ListItem