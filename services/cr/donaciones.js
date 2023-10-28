import fetch from "node-fetch";

const listaDonaciones = async(fechaInicio, fechaFin, max, offset, access_token) => {
    try {
        const myHeaders = { "Authorization": `Bearer ${access_token}` }

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }

        const response = await fetch(`${process.env.CR_API}/admin/searchDonationsList?fechaOpcion=1&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&mostrarOpcion=0&mostrarId=null&ordenarOpcion=2&ordenOpcion=2&estatusId=null&conciliada=null&tipoReporte=general&max=${max}&offset=${offset}`, requestOptions);

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

export { listaDonaciones };