import React, { useState, creatContext } from 'react'

export const AuthContext = creatContext()

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
