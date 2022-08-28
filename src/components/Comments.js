import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../App.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import book from "../book.avif";
// eslint-disable-next-line
import { resolveBreakpointValues } from "@mui/system/breakpoints";
import React from "react";

export default function Comments() {
    const [comments, setComments] = useState([]);
    const {id, name} = useParams();
    const [comm, setComm] = useState({});
    let current;

    useEffect(() => {
        getComments();
    }, [])

    const getComments = () => {
         axios
           .get(`http://findworker-app.herokuapp.com/api/comment/get_comments.php?id=${id}`
           )
           .then(function (response) {
             console.log(response.data);
             const reversed = [...response.data].reverse();
             setComments(reversed);
           });
    }

    const postComment = (e) => {
        e.preventDefault();
        console.log("Hello");
        axios.post(`http://findworker-app.herokuapp.com/api/comment/create.php?id=${id}`, comm);
        //   .then(function (response) {});
        setTimeout(() => window.location.reload(), 3000);
    }

    const setCom = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setComm(prev => ({...prev, [name]: value}));
        current = value;
    }

    return (
        <div className="con">
            <img src={book} alt="Random book"/>
            <h4 className="mt-2">Book Title: {name}</h4>
            <hr className="line" />
            {comments.length > 0 ? 
                comments.map((comment, key) => (
                <div>
                    <p className="wrap">{comment.comment}</p>
                    <p>Commenter: Dozie</p>
                    <hr />
                </div>
                )) : <p>No comments yet</p>
            }
            <Form onSubmit={postComment}>
                <FloatingLabel controlId="floatingTextarea2" label="Comment">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        name="comment"
                        onChange={setCom}
                        value={current}
                    />
                </FloatingLabel>
                <button className="btn btn-primary btn1">Post</button>
            </Form>
        </div>
    )
}
