import React from 'react'
import "./write.css"

export default function Write() {
  return (
    <div className="write">
    

        <form className="writeForm">

            <img
            className="writeImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            />
            <div className="writeFormGroup">
                <label htmlFor="fileInput" >
                    <i className="writeIcon fas fa-plus"></i>
                </label>

                <input id="fileInput" type="file" style={{ display: "none" }} />

                <input className="writeInput" placehodler="Title" type="text" autoFocus={true}></input>

                <button className="writeSubmit" type="submit">
                         Publish
                </button>
            </div>

            <div className="writeFormGroup">
                <textarea
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                autoFocus={true} 
                ></textarea>
            </div>
          
        </form>
    </div>
  )
}
