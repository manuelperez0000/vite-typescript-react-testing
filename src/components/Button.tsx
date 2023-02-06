import { useState,useEffect } from 'react'
import './Button.css'
import getData from '../service/getData'

const Button = () => {

    const [name, setName] = useState("No Name")

    useEffect(()=>{
        fetchApi()
    },[])

    const fetchApi = async ()=>{
        const {name} = await getData(1)
        setName(name)
    }

    return (<>
        <button> {name}</button>
    </>)
}
export default Button










/* interface Person {
    hi: string
    name: string
    age: number
    /* const hellow = ({ hi = "hi", name = "name", age = 69 }: Person) => {
        alert(`${hi} ${name} you have ${age} years old`)
} */