// api.ts
import axios from "axios";

const API_URL = "https://azaffiliates-backend-stage-952bede69c8f.herokuapp.com"; // URL do json-server

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users/auth`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erro ao fazer login");
    }
    throw new Error("Erro desconhecido");
  }
};
