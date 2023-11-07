import { createContext, useContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"

import { useLocalStorage } from "./use-localstorage"
import { HTTP } from "src/helper/http-common"


const AuthContext = createContext()
export const AuthProvider = ({children}) => {

  const [user, setUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

  const login = async (email, password) => {
    await HTTP.post('login',
    {
      email,
      password
    }
    ).then (response => {
      const {data} = response
      console.log(data);
      if (data.status_code === 200)
      {
        setUser(data.access_token)
        navigate('/')
      } else {
        alert(data.message)
      }
    })
  }

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };
  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}
export const useAuth = () => useContext(AuthContext);
