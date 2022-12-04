import React, {useEffect, useState} from 'react';
import Service from "../api/Service";

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
        <table className="table table-striped container modal-fullscreen border">
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Text</th>
                <th>Updated</th>
                <th className="text-right">Action</th>
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
                            <button className="btn btn-outline-secondary"
                                    onClick={() => Service.deletePost(posts.id)}
                            >Delete
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default PostList;