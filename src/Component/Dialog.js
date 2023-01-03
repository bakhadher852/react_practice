import React from 'react'
import Card from './UI/Card'
import './Dialog.css'
import Button from './UI/Button'

const Dialog = (props) => {
  return (
    <div className="backdrop " onClick={props.onClick}>
      <Card className="dialogStyle">
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.msg}</p>
        </div>
        <footer>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}
export default Dialog
