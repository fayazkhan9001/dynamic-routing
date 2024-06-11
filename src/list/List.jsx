import React from 'react'
import ListItem from './ListItem'

const List = () => {
    const subject = ["a", "b", "c", "d", "e"]
  return <div>

  </div>
  {
    subject.map( (subject, index) =>(
        <ListItem key={index} title={subject} />
      ))
  }
  
 
}

export default List