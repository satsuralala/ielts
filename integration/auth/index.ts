import { signIn } from "../auth-handler";
import { apiClient } from "../service";

export namespace AuthService {
  export const signUp = (email: string, password: string) => {
    console.log(email, password);
    return apiClient.post<any>("/auth/signup", { email, password });
  };

  export const login = async (data: any) =>
    await signIn("credentials", {
      ...data,
      redirectTo: "/dashboard",
    });
}
