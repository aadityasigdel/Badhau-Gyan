import React from 'react'
import  Navigation from './Navigation.jsx'

export default function Friends() {
    return (
        <div>
            <Navigation/>
            List of Friends
            <ul className="list-disc pl-5">
                <li>Friend 1</li>
                <li>Friend 2</li>
                <li>Friend 3</li>
                <li>Friend 4</li>
                <li>Friend 5</li>
            </ul>
        </div>
    )
}
