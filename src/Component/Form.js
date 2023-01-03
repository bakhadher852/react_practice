import React, { useState } from 'react'
import './Form.css'
import Dialog from './Dialog.js'
import Button from './UI/Button'
const Form = (props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const [msg, setMsg] = useState('')

  const handleCloseDialog = () => {
    setShowDialog(false)
  }
  const setNameHandler = (event) => {
    setName(event.target.value)
  }
  const setAgeHandler = (event) => {
    setAge(event.target.value)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const newItem = { name: name, age: age, id: Math.random().toString() }
    if (name.trim().length === 0 || age.trim().length === 0) {
      setMsg('Please enter a valid name and age (non-empty values).')
      setShowDialog(true)
      return
    }
    if (age < 0) {
      setMsg('Please enter a valid age >0')
      setShowDialog(true)
      return
    }

    props.listDataHandler(newItem)
    setName('')
    setAge('')
    setMsg('')
  }
  return (
    <div>
      {showDialog && (
        <Dialog
          onClick={handleCloseDialog}
          msg={msg}
          title="Invalid input"
        ></Dialog>
      )}
      <div className="innerFormStyle">
        <form onSubmit={onSubmitHandler}>
          <label>Username</label>
          <input type="text" onChange={setNameHandler} value={name} />
          <label>Age (Years)</label>
          <input type="number" onChange={setAgeHandler} value={age} />

          <Button type={'submit'}>Add User</Button>
        </form>
        {/* {showDialog && (
          <div>
            This is the content of the dialog.
            <button onClick={handleCloseDialog}>Okay</button>
          </div>
        )} */}
      </div>
    </div>
  )
}
export default Form
