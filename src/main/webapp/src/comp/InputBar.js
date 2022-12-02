import React, {useState} from 'react';
import Service from "../api/Service";

const InputBar = () => {

    const [post, setPost] = useState({
        title: "",
        text: ""
    })

    const {title, text} = post
    const [frontError, setFrontError] = useState(false)

    const handleSubmit = (e) => {
        if (title.length < 3 || text.length < 1) {
            e.preventDefault()
            setFrontError(true)
        }
        console.log(post)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container is-max-desktop">
                <div className="container">
                    <div className="field">
                        <label className="title">Create post</label>
                        <div className="control">
                            <input className="input"
                                   autoFocus
                                   type="text"
                                   placeholder="Set title"
                                   name="title"
                                   value={title}
                                   onChange={(e) => setPost({...post, [e.target.name]: e.target.value})}
                            />
                        {frontError && title.length < 3 ?
                            <p className="help is-danger">Title must be 3 chars or more</p> : ""
                        }
                    </div>
                </div>
                <div className="container mt-2">
                <textarea className="textarea is-normal"
                          placeholder="Set text"
                          name="text"
                          value={text}
                          onChange={(e) => setPost({...post, [e.target.name]: e.target.value})}
                />
                {frontError && text.length < 1 ?
                    <p className="help is-danger">Text must be 1 char or more</p> : ""
                }
                </div>
                </div>
                <br/>
                <button className="button is-link mt-auto"
                        onClick={() => Service.addPost(post)}
                >Create
                </button>
            </div>
        </form>
    );
};

export default InputBar;