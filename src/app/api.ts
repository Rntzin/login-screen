// api.ts
import axios from "axios";

const API_URL = "http://localhost:3001"; // URL do json-server

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users`, { email, password });
    return response.data;
  } catch (error) {
    // Pode lançar o erro novamente ou tratar conforme necessário
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erro ao fazer login");
    }
    throw new Error("Erro desconhecido");
  }
};
