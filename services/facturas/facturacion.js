import fetch from "node-fetch";

const facturar = async(factura) => {
    try {
        //const myHeaders = { "Authorization": `Bearer ${access_token}` }
        //headers: myHeaders,

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        const response = await fetch(`${process.env.FACE_API}${factura}`, requestOptions);

        const status = response.status;
        const data = await response.json();

        if (status === 200)
            return data;
        else
            throw new Error(data);
    } catch (error) {
        console.log(error);

        return JSON.parse(error.message);
    }
}

export { facturar };