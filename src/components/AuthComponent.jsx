import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function AuthComponent({component}) {

    const {token} = useSelector((state) => state.auth)

    if(!token) return(<Navigate to="/login" />) 
    if(token) return component
}