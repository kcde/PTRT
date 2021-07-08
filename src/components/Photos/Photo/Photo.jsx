import React from 'react'
import "./Photo.css"

const  Photo = () => {
    return (
        <div className="photo">
        <img src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIyNTJ8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHwxfHxvcmFuZ2V8MTYyNTc3NTIwOA&ixlib=rb-1.2.1&q=80&w=1080" alt="photo 1" />
        <div className="photo__info">
          <p>photo by constantine</p>
        </div>
      </div>
    )
}

export default Photo
