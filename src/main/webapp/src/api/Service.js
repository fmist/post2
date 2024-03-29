import axios from "axios";

export default class Service {

    static request = axios.create({baseURL: "http://192.168.0.104:8081"})

    static deletePost = async (id) => {
        await Service.request.post(`/delete/${id}`)
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            })
    }

    static addPost = async (post) => {
        await Service.request.post("/add", post)
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            })
    }
}