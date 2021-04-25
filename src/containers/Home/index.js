import React from 'react'
import Services from '../../services'
import styled from 'styled-components'
import Card from '../../components/card'
import LoaderComponent from '../../components/loader'
import { withRouter } from 'react-router'
const Section = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Home = (props) => {
  const [Posts, setPosts] = React.useState([])
  const [TempPost, setTempPost] = React.useState([])
  const [Loader, setLoader] = React.useState(true)
  const [Input, setInput] = React.useState('')
  const [button, setbutton] = React.useState(0)
  const UniqueUserList = (data) => {
    let ReturnData = []
    let UserData = [
      ...new Set(
        data.map((item) => {
          return item.id
        })
      ),
    ]
    UserData.forEach((item, index) => {
      if (item === data[index].id) {
        ReturnData.push(data[index])
      }
    })

    return ReturnData
  }
  const DataStructure = (users, posts) => {
    let FinalList = []

    posts.forEach((item, index) => {
      let INDEX = users.findIndex((userlist) => userlist.id === item.userId)
      FinalList.push({
        post: item,
        user: users[INDEX],
      })
    })
    return FinalList
  }
  const fetchUsers = async () => {
    let Response = await Services.Users()
    let UniqueUserListcalled = await UniqueUserList(Response.data)
    return UniqueUserListcalled
  }

  const fetchPosts = async () => {
    let response = await Services.Post()
    return response.data
  }

  React.useEffect(() => {
    async function FetchService() {
      let FinalList = []
      let Users = await fetchUsers()
      let Posts = await fetchPosts()
      FinalList = await DataStructure(Users, Posts)
      console.log('FetchService -> FinalList', FinalList)
      setPosts(FinalList)
      setLoader(false)
    }
    FetchService()
  }, [])
  const Clicked = (event) => {
    console.log('Clicked -> event', event)
    props.history.push(`/user?UserId=${event.target.id}`)
    // props.history.push({
    //   pathname: `/user?UserId=${event.target.id}`,
    //   params: { userId: event.target.id },
    // })

    console.log('Clicked -> clicked')
  }
  const Clickedpost = (event) => {
    console.log('Clickedpost -> event', event)
    props.history.push(`/post?PostId=${event.target.id}`)
    // props.history.push({
    //   pathname: `/post?PostId=${event.target.id}`,
    //   params: { postId: event.target.id },
    // })

    console.log('Clicked -> clicked post')
  }

  return Loader ? (
    <LoaderComponent>Loading</LoaderComponent>
  ) : (
    <Section>
      <div>
        <input
          value={Input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        ></input>
        <button
          onClick={() => {
            let NewArray = []
            Posts.filter((item, index) => {
              console.log('Home -> item', item.user.name)
              if (Input === item.user.name) {
                NewArray.push(item)
              }
            })
            setTempPost(NewArray)
            setbutton(1)
            console.log('Home -> NewArray', NewArray)
          }}
        >
          Search{' '}
        </button>
        <button
          onClick={() => {
            setbutton(0)
            setInput('')
          }}
        >
          Reset
        </button>
      </div>

      <Card
        data={button === 0 ? Posts : TempPost}
        onClick={(event) => {
          Clicked(event)
        }}
        onPostClick={(event) => {
          Clickedpost(event)
        }}
      ></Card>
    </Section>
  )
}

export default withRouter(Home)
