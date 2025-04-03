import { User } from "../../core/domain/User";
import { AuthService } from "../../core/ports/AuthService";

export class AuthServiceImpl implements AuthService {
    async login(email: string, password: string): Promise<User | null> {
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                return null;
            }

            const data = await response.json();

            return {
                id: data.id,
                email: data.email,
                name: data.name,
                token: data.token,
            };
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            return null;
        }
    }

    async logout(): Promise<void> {
        localStorage.removeItem("token");
    }
}
