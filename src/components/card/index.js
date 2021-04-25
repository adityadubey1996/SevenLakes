import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 60%;
  background-color: '#f5f5f5';
  display: flex;
  flex-direction: column;
  border: solid 1px black;
`

const Cards = (props) => {
  console.log('Cards -> props', props)
  return props.data.length > 0 ? (
    props.data.map((item, index) => (
      <Card key={item.post.id}>
        <div
          onClick={(e) => {
            props.onPostClick(e)
          }}
          id={item.post.id}
        >
          {item.post.title}
        </div>
        <div
          onClick={(e) => {
            props.onClick(e)
          }}
          id={item.user.id}
        >
          {item.user.name}
        </div>
      </Card>
    ))
  ) : (
    <div></div>
  )
}

export default Cards
