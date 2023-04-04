import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useLocalStorage } from './localStorage';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({});

  const [ storedToken, setStoredToken, delStoredToken ] = useLocalStorage('@foodexplorer:token');
  const [ storedUser, setStoredUser, delStoredUser ] = useLocalStorage('@foodexplorer:user');

  //console.log('stored:', storedToken, storedUser);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });

      //console.log(response.data);

      const { token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user });

      setStoredToken(token);
      setStoredUser(user);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível fazer login');
      }
    }
  }

  function signOut() {
    delStoredToken()
    delStoredUser()
    setData({})
  }

  useEffect(() => {

    if (storedToken && storedUser) {

      api.defaults.headers.authorization = `Bearer ${storedToken}`;
      setData({ token: storedToken, user: storedUser });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook useAuth - authentication hook
 * @returns {{ signIn(), signOut(), user }} - return func signIn & user data
 */
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
