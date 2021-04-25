import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import services from '../../services'
const SectionBG = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  flex-direction: column;
  .POST {
    display: flex;
  }
  .POST > .Left-text {
    width: 10%;
    min-width: 40px;
  }
`

const PostCard = (props) => {
  console.log('PostCard -> props', props)
  const [user, setuser] = React.useState({})

  return (
    <SectionBG>
      <h3>Post</h3>
      {Object.keys(props.PostData).map((item, index) => {
        if (item == 'title') {
          return (
            <div className="POST">
              <div className="Left-text"> {item} :</div>
              <div className="Right-text">{props.PostData[item]}</div>
            </div>
          )
        }
      })}
    </SectionBG>
  )
}

export default PostCard
