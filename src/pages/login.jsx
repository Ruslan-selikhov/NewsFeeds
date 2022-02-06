import {Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [valueLogin,setLogin]=useState('');
    let [valuePass,setPass]=useState('');
    const handlerSubmit=(e)=>{
        e.preventDefault();
        if((valueLogin=='admin@gmail.com')&&(valuePass=='1234'))
        {
            dispatch({type:'login'})
            navigate('/account')
        }
        else
        {
            console.log(valueLogin,valuePass)
            setPass('')
            alert('Не верный логин или пароль')

        }
        console.log('lol')

    }
    return(
        <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={valueLogin} onChange={(e)=>setLogin(e.target.value)} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={valuePass} onChange={(e)=>setPass(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default Login