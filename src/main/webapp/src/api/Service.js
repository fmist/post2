import axios from "axios";

export default class Service {
    static request = axios.create({baseURL: "http://192.168.0.101:8081"})
    static serverTitleError
    static serverTextError

    static deletePost = async (id) => {
        await Service.request.post(`/delete/${id}`)
            .then(response => response.data);
        window.location.reload()
    }

    static addPost = async (post) => {
        await Service.request.post("/add", post)
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            }).catch(error => {
                error.response.data.fieldErrors.forEach(fieldError => {
                    if (fieldError.field === 'title') {
                        Service.serverTitleError = fieldError.message
                    }
                    if (fieldError.field === 'text') {
                        Service.serverTextError = fieldError.message
                    }
                })
            })
    }
}