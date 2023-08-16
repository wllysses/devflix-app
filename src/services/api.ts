import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export async function getAuthUser(formData: { email: string, password: string }) {
    const response = await api.post('/api/auth', 
        {  
            email: formData.email,
            password: formData.password
        }
    )
    return await response.data
}

export async function registerUser(formData: { name: string, email: string, password: string, confirm_password: string }) {
    const response = await api.post('/api/users', 
        {  
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirm_password
        }
    )
    return await response.data
}

export async function getGenres() {
    const response = await axios.request({
        url: 'https://api.themoviedb.org/3/genre/list',
        params: {
            language: 'pt-BR'
        },
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGQ3YmFiNTc1YzE5NWJjNDk4NDc3ODE0M2M3OWMwNiIsInN1YiI6IjYzNDQxYmQ2Y2RmMmU2MDA3ZjMxZGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HVsrxab8m6ECtYhZhWWVLV_7W2BN2PrpvE4xm_Q-gSI'
        }
    })
    return await response.data.genres
}

export async function getMovies(id: number) {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&language=pt-br`, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGQ3YmFiNTc1YzE5NWJjNDk4NDc3ODE0M2M3OWMwNiIsInN1YiI6IjYzNDQxYmQ2Y2RmMmU2MDA3ZjMxZGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HVsrxab8m6ECtYhZhWWVLV_7W2BN2PrpvE4xm_Q-gSI'
        }
    })
    return await response.data.results
}


export async function getMovieById(id: number) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-br`, {
        headers: {
            Authorization: `Bearer ${process.env.SECRET_API_KEY}`
        }
    })
    return await response.data
}