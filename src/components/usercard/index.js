import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'

const Card = styled.div`
  width: 60%;
  background-color: '#f5f5f5';
  display: flex;
  flex-direction: column;
  border: solid 1px black;
`

const Usercards = (props) => {
  console.log('Usercards -> props', props)
  const [Data, setData] = React.useState({})

  return (
    <Card>
      <h3>User</h3>
      {props.renderItem.map((item, index) => {
        let text = JSON.stringify(props.data[item])
        text.replace('"', '')
        text.replace('{', '')
        text.replace('}', '')
        return (
          <div
            style={{
              display: 'flex',
            }}
          >
            <div>{item} : </div>
            <div>{text}</div>
          </div>
        )
      })}
      <button
        style={{
          display: props.buttonState ? 'block' : 'none',
        }}
        onClick={() => {
          props.history.push('/')
        }}
      >
        go back
      </button>
    </Card>
  )
}

export default withRouter(Usercards)
