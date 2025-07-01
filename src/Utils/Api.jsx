import { useContext, useEffect, useState } from "react"
import { ContextData } from "../ContextAPI/Context";

export default function API() {

    const {ApiData, setApiData} = useContext(ContextData);

    const handleFetch = async () => {
        const result = await fetch("https://mocki.io/v1/ab8d3b45-9db4-4886-9bda-4e238b776970")
        const data = await result.json()
        setApiData(data)
        console.log(data)
    }
    useEffect(
        () => {
            handleFetch
        }, []
    )
    return null
}