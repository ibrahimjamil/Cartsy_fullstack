import React from 'react'
import {useDispatch} from 'react-redux'

function SagaTesting() {
    const dispatch=useDispatch()
    dispatch({type:"DATA",payload:{user:"ibrahim",password:"jamil"}})
    dispatch({type:"DATA",payload:{user:"jamil",password:"ahmed"}})
    dispatch({type:"DATA",payload:{user:"bari",password:"jamil"}})
    dispatch({type:"DATA",payload:{user:"mani",password:"jamil"}})
    return (
        <div>
        </div>
    )
}

export default SagaTesting
