import axios from "axios";

//Instanciar o objeto axios
const api = axios.create({
  baseURL:"https://api.themoviedb.org/3"
})

// Listar Todos os filmes 
export const findAll = async (url: string, setDados: Function,header: Object) =>{
  const resposta = await api.get(url,header)
  setDados(resposta.data);
}

