import axiosInstance from "../axiosConfig";

export const getRequest = async (url: string) => {
    const instance = axiosInstance();

    const response = await instance.get(url);
    if (response.status == 200) {
        const dados = {
            sucesso: true,
            status: response.status,
            dados: response.data
        }

        return dados;
    } else {
        const dadosError = {
            sucesso: false,
            status: response.status,
            dados: response.data
        }

        return dadosError;
    }
}

export const postRequest = async (url: string, dados: object) => {
    const instance = axiosInstance();

    const response = await instance.post(url, dados);
    if (response.status == 200) {
        const dados = {
            sucesso: true,
            status: response.status,
            dados: response.data
        }

        return dados;
    } else {
        const dadosError = {
            sucesso: false,
            status: response.status,
            dados: response.data
        }

        return dadosError;
    }
}

export const putRequest = async (url: string, dados: object) => {
    const instance = axiosInstance();

    const response = await instance.put(url, dados);
    if (response.status == 200) {
        const dados = {
            sucesso: true,
            status: response.status,
            dados: response.data
        }

        return dados;
    } else {
        const dadosError = {
            sucesso: false,
            status: response.status,
            dados: response.data
        }

        return dadosError;
    }
}

export const deleteRequest = async (url: string, dados?: object) => {
    const instance = axiosInstance();

    const response = await instance.delete(url, dados);
    if (response.status == 200) {
        const dados = {
            sucesso: true,
            status: response.status,
            dados: response.data
        }

        return dados;
    } else {
        const dadosError = {
            sucesso: false,
            status: response.status,
            dados: response.data
        }

        return dadosError;
    }
}

export const patchRequest = async (url: string, dados?: object) => {
    const instance = axiosInstance();

    const response = await instance.patch(url, dados);
    if (response.status == 200) {
        const dados = {
            sucesso: true,
            status: response.status,
            dados: response.data
        }

        return dados;
    } else {
        const dadosError = {
            sucesso: false,
            status: response.status,
            dados: response.data
        }

        return dadosError;
    }
}