import axios from "axios";

export default class Service {
    static request = axios.create({baseURL: "http://localhost:8081"})

    static deletePost = async (id) => {
        await Service.request.post(`/delete/${id}`)
            .then(response => response.data);
        window.location.reload()
    }

    static clickAddPost = async (post) => {
        await Service.request.post("/add", post)
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            })
    }
}