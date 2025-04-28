import api from "../services/api"

export async function signInRequest({username, password}){
    const response =await api.post('/api/auth/', {username, password});

    const {token, user} = response.data;
    return {token, user};
}

export async function signOutRequest(){
    // Se não tiver API para logout, apenas resolve
    return Promise.resolve();
}

export async function loadUserRequest(){
    const response = await api.get('/me');
    return response.data
}