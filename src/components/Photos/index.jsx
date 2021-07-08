import React, { useState } from 'react'
import Photo from './Photo/Photo'
import "./Photos.css"



const Photos = () =>{

    return (
        <div className="photo-grid">
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        </div>
    )

}

export default Photos