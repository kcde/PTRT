import React from 'react'
import "./Photo.css"

const  Photo = () => {
    return (
        <div className="photo">
            <div className="photo__info">
            <div className="photo__info-img">
                <img src="https://images.unsplash.com/profile-1599446683222-b1e5543a0b3dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128" alt="" />
            </div>
          <p  className="photo__info-name">constantine</p>
        </div>
        <img src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIyNTJ8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHwxfHxvcmFuZ2V8MTYyNTc3NTIwOA&ixlib=rb-1.2.1&q=80&w=1080" alt="photo 1" />

      </div>
    )
}

export default Photo
