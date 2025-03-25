import axios from "axios";

const url = "http://localhost:4000/books"


export async function getAllBooks() {
    try {
        let response = await axios.get(url);
        if (response.status === 200) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}

export async function getBookById(id) {
    try {
        let response = await axios.get(`${url}/${id}`);
        if (response.status === 200) {
            console.log('response.data: ', response.data)
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}

export async function addBook(book) {
    let response = await axios.post(url, book)
    if (response.status == 201) {
        console.log('response.data: ', response.data)
        return response.data
    } else {
        console.log("deleteEmployeeById = ", response);
        return null
    }

}


export async function updateBook(employee, id) {
    try {
        let response = await axios.put(`${url}/${id}`, employee)
        if (response.status === 200) {
            return response.data;
        } else {
            return [];
        }

    } catch (error) {
        console.log("Error updating book", error);
        return [];

    }
}


export async function deleteBook(id) {
    try {
        let response = await axios.delete(`${url}/${id}`)
        if (response.status === 200) {
            return response.data
        } else {
            console.log("deleteEmployeeById = ", response);
            return null
        }


    } catch (error) {
        console.log("Error Deleting book", error);
        return null;

    }
}
