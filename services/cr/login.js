import fetch from "node-fetch";

const login = async(user, pass) => {
    try {
        const body = {
            username: user,
            password: pass
        };

        const requestOptions = {
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify(body)
        }

        const response = await fetch(`${process.env.CR_API}/login`, requestOptions);

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

export { login };
