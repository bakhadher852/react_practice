import React, { useState } from 'react'

import Form from './Component/Form'
import Items from './Component/Items'
import Card from './Component/UI/Card'

function App() {
  const [listItem, setListItem] = useState('')

  const newListData = (newItem) => {
    setListItem((prevItem) => {
      const updatedList = [...prevItem]
      updatedList.unshift({
        name: newItem.name,
        age: newItem.age,
        id: newItem.id,
      })
      return updatedList
    })
  }
  return (
    <div>
      <Card>
        <Form listDataHandler={newListData} />
      </Card>
      <Card>
        <Items list={listItem}></Items>
      </Card>
    </div>
  )
}

export default App
