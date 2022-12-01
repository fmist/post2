import React, {useEffect, useState} from 'react';
import Service from "../api/Service";

const PostList = () => {

    const [posts, setPosts] = useState([])

    useEffect( () => {
        Service.request.get("/")
            .then(response => {
                setPosts(response.data)
                console.log(response.data)
            })
    }, [])

    return (
        <div className="box">
        <table className="table is-bordered is-striped is-narrow is-fullwidth">
            <thead>
            <tr>
                <th align="center">Id</th>
                <th align="center">Title</th>
                <th align="center">Text</th>
                <th align="center">Updated</th>
                <th align="center">Action</th>
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
                        <td>
                            <button className="delete is-medium"
                                    onClick={() => Service.deletePost(posts.id)}
                            />
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </div>
    );
};

export default PostList;