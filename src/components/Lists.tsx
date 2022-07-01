import React from 'react'
import { List } from './List';

export const Lists = () => {

    const items:string[]=["akhi","alpha","putul"]
    const onClick=(text:string):void=> alert(text);
    
  return (
    <div>
        <List items={items} onClick={onClick} />

       
    </div>
  )
}
