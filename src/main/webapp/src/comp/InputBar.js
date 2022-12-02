import React, {useState} from 'react';
import Service from "../api/Service";

const InputBar = () => {

    const [post, setPost] = useState({
        title: "",
        text: ""
    })

    const {title, text} = post

    return (
        <div className="container is-max-desktop">
            <input className="input is-small"
                   type="text"
                   placeholder="Set titleasdasdasd"
                   name="title"
                   value={title}
                   onChange={(e) => setPost({...post, [e.target.name]: e.target.value})}
            />
            <textarea className="textarea is-small"
                      placeholder="Set text"
                      name="text"
                      value={text}
                      onChange={(e) => setPost({...post, [e.target.name]: e.target.value})}
            />
            <button className="button is-link"
                    onClick={() => Service.addPost(post)}
            >Create<
            /button>
        </div>
    );
    };

export default InputBar;