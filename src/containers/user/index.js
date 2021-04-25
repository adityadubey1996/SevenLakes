import React from 'react'
import Services from '../../services'

import { withRouter } from 'react-router'
import Usercards from '../../components/usercard'
import LoaderComponent from '../../components/loader'
import LoaderStyles from '../../common/loadingStyles'
const Users = (props) => {
  console.log('Users -> props', props)
  const [Loader, setLoader] = React.useState(true)
  const [Data, setData] = React.useState({})
  const [errorMessage, seterrorMessage] = React.useState('loading')

  const FetchUserData = async (ID) => {
    let Response = await Services.SingleUser(ID)
    console.log('FetchUserData -> Response', Response)
    setData(Response.data)
    setLoader(false)

    return Response
  }
  React.useEffect(async () => {
    let ID = props?.location?.search.split('=')[1]
    console.log('fetchUser -> ID', !ID)
    if (!ID) {
      seterrorMessage('something went wrong go back')
    } else {
      let Testing = await FetchUserData(ID)
      console.log('Users -> Testing', Testing)
    }
  }, [])

  return Loader ? (
    <LoaderStyles>{errorMessage}</LoaderStyles>
  ) : (
    <div>
      <Usercards data={Data} renderItem={['name', 'username', 'website', 'company', 'email']} buttonState={true} />
    </div>
  )
}

export default withRouter(Users)
