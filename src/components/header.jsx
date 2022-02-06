import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import '../App.css'
function Header(){
    const isLog= useSelector(state=>state.isLogged)
    const dispatch=useDispatch()
    return(
        <header>
            <Navbar bg="dark" variant="dark">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Домой</Nav.Link>
                    <Nav.Link as={Link} to='/news'>Новости</Nav.Link>
                    <Nav.Link as={Link} to='/account'>Аккаунт</Nav.Link>
                    {isLog?
                        <Nav.Link onClick={()=>dispatch({type:'logout'})}>Выход</Nav.Link>:
                        <Nav.Link as={Link} to='/login'>Вход</Nav.Link>
                    }   
                </Nav>
            </Navbar>
        </header>
        )
}
export default Header