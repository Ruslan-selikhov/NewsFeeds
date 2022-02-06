import {useSelector} from 'react-redux'
function Account(){
    const isLogin =  useSelector(state=>state.isLogged)
    return isLogin?<h1>You loged</h1>:<h1>You dont login</h1>
}
export default Account