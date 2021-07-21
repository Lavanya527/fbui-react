import React from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar } from '@material-ui/core'
import TimeAgo from 'react-timeago'
import { useState } from 'react';
import Comment from './Comment'
import Badge from '@material-ui/core/Badge';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const Post = (props) => {
    const [toggole, setToggole] = useState(false)
    const [id, setid] = useState(''); 
    var data = props.postdata1;
    const formatter = buildFormatter(englishStrings)
    const update = (id,postlike)=> {
        props.postlike(id, postlike);
    }
    const deletepost = (id) => {
        props.deletepost1(id);
    }
    const coment = (id) => {
        setToggole(true);
        setid(id);
    }
    return (
        <>
        {data && data.map((value) => {
            return (
                <>
                <div className="card1" >
                    <span><Avatar id="pic1"/><p className="para">Lavanya</p></span>
                    <TimeAgo className="date" date={value.date} formatter={formatter} />
                    <h5 className="demo1">{value.post}
                    </h5>
                        <hr className="hori1" />
                        <button className="cardlink2"
                        id={value.id}onClick={
                            () => {update(value.id,value.postlike)}
                        } 
                        > <ThumbUpAltIcon/> <Badge> {value.postlike}</Badge></button>
                        <CommentIcon className="comment1" id={value.id} onClick={
                            () => {coment(value.id)}
                        }   />
                        <DeleteIcon className="button1"
                            id={value.id} 
                            onClick={
                                () => { deletepost(value.id) }} />
                            <Comment id={value.id} postid={id} bole={toggole} comm1={props.comm} comm2={props.postcomment1} delete1={props.delete} />
                 </div>
                </>
            )
            })}
        </>
    )
}

export default Post
