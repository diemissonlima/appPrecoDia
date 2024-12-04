import { create } from "zustand";

const useAuthStore = create((set) => ({
    usuarioLogado: false,
    usuario: "",
    senha: "",
    token: "",
    image: "",
    mensagemErro: "",

    login: async (usuario, senha) => {
        try {
            const loginResponse = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: usuario, //'emilys',
                  password: senha, //'emilyspass',
                }),
                credentials: 'include' // Include cookies (e.g., accessToken) in the request
              })

            const loginData = await loginResponse.json()

            if (loginData.accessToken){
                set({ usuarioLogado: true, usuario: usuario, senha: senha, token: loginData.accessToken, image: loginData.image });
            }

            console.log('loginData', loginData)

        } catch (error) {

        }
    },

    logout: () => set({ usuarioLogado: false, usuario: "", senha: "", token: "" })

}));

export default useAuthStore;
