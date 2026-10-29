import { AuthContext } from './auth-context.js'

export function AuthProvider({ children }) {
  // Login has no implementation yet. Visitors remain guests, so the app bar stays visible.
  const value = {
    isAuthenticated: false,
    isGuest: true,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
