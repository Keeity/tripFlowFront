import { createContext, useState } from "react";
import PropTypes from 'prop-types' //npm install --save prop-types
import { api } from "../services/api";

export const AuthContext = createContext({
    user: null, 
    signIn: async () => {}, // função entrar na aplicação
    signOut: () => {} // função para "remover" o estado do usuario da aplicar 
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
    
const userStorage = localStorage.getItem('@tripflow:user') //nao entendi o que colocar aqui

    if(userStorage) {
 return JSON.parse(userStorage)
        }

        return null
    })
async function signIn({email, password}) {
    try {
        const response = await api(`/users?email=${email}`);
        const data = await response.json();
        
        
        if (data.length > 0) {
            const usuario = data[0];
            
            // Compara a senha fornecida com a senha armazenada
            if (usuario.password === password) {
                setUser(usuario);
                localStorage.setItem('@tripflow:user', JSON.stringify(usuario));
                return true;
            }
        }
    } catch (error) {
        console.error('Erro ao autenticar', error);
    }
//early return
return false 
}
    

  function signOut() {
        setUser(null);
        localStorage.removeItem('@tripflow:user');
    }

    return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
        {children}
    </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
children: PropTypes.node.isRequired,
}
