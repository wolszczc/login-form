import axios from "axios";

interface LoginBody {
  email: string;
  password: string;
}

type LoginResponse =
  | {
      status: "ERROR";
      code: number;
      error: string;
    }
  | {
      status: "SUCCESS";
      code: number;
      token: string;
      type: string;
    };

export const login = async (body: LoginBody) => {
  return await axios.post<LoginResponse>("/api/authorize", {
    login: body.email,
    password: body.password,
  });
};
