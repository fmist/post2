import React, {useEffect, useState} from 'react';
import Service from "../api/Service";
import {Button, Table} from "react-bootstrap";

const PostList = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        Service.request.get("/")
            .then(response => {
                setPosts(response.data)
                console.log(response.data)
            })
    }, [])

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Text</th>
                <th>Updated</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                posts.map((posts) => (
                    <tr key={posts.id}>
                        <td align="center">{posts.id}</td>
                        <td>{posts.title}</td>
                        <td>{posts.text}</td>
                        <td>{posts.time}</td>
                        <td className="text-right">
                            <Button variant="secondary"
                                    onClick={() => Service.deletePost(posts.id)}
                            >Delete
                            </Button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
};

export default PostList;