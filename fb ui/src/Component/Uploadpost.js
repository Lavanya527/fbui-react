import React from 'react'
import { useState } from 'react'
import { Avatar } from '@material-ui/core'
import people from '../people.png'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
const Uploadpost = (props) => {
    const onTrigger = (e) => {
        e.preventDefault();
        props.sub(e.target.elements.postdata.value);
     }
   /* const submitButton = () => {
        props.sub(post1);
    }*/
    return (
        <div>
        <form onSubmit = {onTrigger}>
        <input type = 'text'
        className = "input2"
        placeholder = "What's on your mind?"
        name="postdata"/>
             <input type = "submit" value = "Submit"/>
            </form>
            <hr />
                <div>
                <span> <AddToPhotosIcon className="pic3" /></span>
                <span> <LocationOnIcon  className="pic3" /></span>
                <span> <PersonAddIcon className="pic3" /></span>
                    <span> <InsertEmoticonIcon className="pic2" /></span>
                </div>
        </div>
       
    )
}

export default Uploadpost
