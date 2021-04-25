import React from 'react'
import Services from '../../services'
import styled from 'styled-components'
import Card from '../../components/card'
import LoaderComponent from '../../components/loader'
import { withRouter } from 'react-router'
import PostCard from '../../components/PostCard'
import LoaderStyles from '../../common/loadingStyles'
import Usercards from '../../components/usercard'
import Comments from '../../components/comment'
const Posts = (props) => {
  console.log('Posts -> props', props)
  const [Loader, setLoader] = React.useState(true)
  const [Data, setData] = React.useState({})
  const [commentData, setcommentData] = React.useState()
  const [User, setUser] = React.useState({})
  const [errorMessage, seterrorMessage] = React.useState('loading')
  let ID = props?.location?.search.split('=')[1]
  let UserId
  async function Fetchpost() {
    if (!ID) {
      seterrorMessage('something went wrong go back')
    } else {
      await Services.SinglePost(ID)
        .then((response) => {
          console.log('Fetchpost -> response', response)
          UserId = response.data.userId
          setData(response.data)
        })
        .catch((error) => {
          return 'error'
        })
    }
  }

  async function CommentData() {
    if (!ID) {
      seterrorMessage('something went wrong go back')
    } else {
      await Services.SingleComments(ID)
        .then((response) => {
          console.log('Fetchpost -> response', response)
          setcommentData(response.data)
          setLoader(false)

          // setData(response.data)
          // setLoader(false)
        })
        .catch((error) => {
          return 'error'
        })
    }
  }
  async function GetUsers() {
    if (!UserId) {
      seterrorMessage('something went wrong go back')
    } else {
      console.log('GetUsers -> UserId', UserId)
      await Services.SingleUser(UserId)

        .then((res) => {
          console.log('GetUsers -> res', res)
          setUser(res.data)
        })
        .catch((error) => {
          console.log('GetUsers -> error', error)
        })
    }
  }
  React.useEffect(async () => {
    let Response1 = await Fetchpost()
    let Response11 = await GetUsers()
    let Response111 = await CommentData()
  }, [setUser, setcommentData, setData, setLoader])
  return Loader ? (
    <LoaderStyles>{errorMessage}</LoaderStyles>
  ) : (
    <div>
      <div>Posts</div>
      <PostCard key={Data.id} PostData={Data} CommnetData={commentData} UserDate={User} />
      <Usercards data={User} renderItem={['name', 'username', 'website', 'company', 'email']} buttonState={false} />
      <Comments data={commentData} />
    </div>
  )
}

export default withRouter(Posts)
