import { useState, useEffect } from "react"

const useFetch = (url)=>{
    //logic

    const [data , setData] = useState([])

    useEffect(()=>{
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                setData(result.products)
            })
        })
    },[])

    return data

}

// hook - function to do particular task
// hooks - custome , builtin - eg:useState - state for functional component, useEffect, useSelector, useDispatch

// custome

export default useFetch