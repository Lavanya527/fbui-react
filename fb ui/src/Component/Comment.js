import React from 'react'
//import Axios from 'axios'
import { Avatar } from '@material-ui/core'
import { useState} from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Comment = (props) => {
    const [comment, setcomment] = useState('');
   /* const postcomm = (id) => {
        setcomment(comment);
        console.log("comemnt is", comment,id);
        props.comment2(id, comment);
    }*/
    var id1 = props.postid;
    const postcomment = () => {
        console.log("data is", id1, comment);
        props.comm1(id1, comment);
    }
  var post1 = props.comm2;
  const deletecomm = (id) => {
    props.delete1(id);
  }
    return (
        <div>
        {post1.map((value1) => {
            if (props.id===value1.postid) {
                return (<div>
                    <div className="comm" >
                        <span><AccountCircleIcon className="icons"/></span>
                        <p className="comment" > {value1.comment} </p> <HighlightOffIcon className="demo7"  onClick={
                          () => { deletecomm(value1.commid) }
                      } />
                    </div>
                </div>
                );
            } else {
                return ""
            }
        })}
            {props.bole&&(props.postid===props.id)? (
                <div>
                <hr />
                    <Avatar className="person1" />
                <form onSubmit = {postcomment}>
                    <input type="text"
                        className="input1"
                            id={props.postid}
                            value={comment}
                        onChange={
                            (e) =>
                                setcomment(e.target.value)
                        }
                        />
                        <input type = "submit" value = "Submit"/>
                    </form>
                    
                </div>
            ) : null}
        </div>
    )
}

export default Comment
