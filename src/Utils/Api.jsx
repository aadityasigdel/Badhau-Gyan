import { useContext, useEffect, useState } from "react"
import { ContextData } from "../ContextAPI/Context";

export default function API() {

    const {ApiData, setApiData} = useContext(ContextData);

    const handleFetch = async () => {
        const result = await fetch("https://mocki.io/v1/8a651d46-4939-4112-ab3f-e3e3812e9a7d")
        const data = await result.json()
        setApiData(data)
        console.log(data)
    }
    useEffect(
        () => {
            handleFetch();
        }, []
    )
    return null
}