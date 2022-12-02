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
                <div className="container mt-2">
                <input className="input is-normal"
                       type="text"
                       placeholder="Set title"
                       name="title"
                       value={title}
                       onChange={(e) => setPost({...post, [e.target.name]: e.target.value})}
                />
                {frontError && title.length < 3 ?
                    <label >Title must be 3 chars or more</label> : ""
                }
                </div>
                <div className="container mt-2">
                <textarea className="textarea is-normal"
                          placeholder="Set text"
                          name="text"
                          value={text}
                          onChange={(e) => setPost({...post, [e.target.name]: e.target.value})}
                />
                {frontError && text.length < 1 ?
                    <label>Text must be 1 char or more</label> : ""
                }
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