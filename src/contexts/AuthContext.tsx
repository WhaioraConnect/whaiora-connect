import React, { createContext, useContext, useState } from 'react'

interface AuthContextType {
  user: any
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (data: any) => Promise<void>
  signUp: (data: any) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  updateProfile: (data: any) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const signIn = async (data: any) => {
    setIsLoading(true)
    // Add your Supabase login logic here
    console.log('Sign in:', data)
    setUser({ email: data.email, role: 'admin', fullName: 'Test User' })
    setIsLoading(false)
  }

  const signUp = async (data: any) => {
    setIsLoading(true)
    console.log('Sign up:', data)
    setIsLoading(false)
  }

  const signOut = async () => {
    setUser(null)
  }

  const resetPassword = async (email: string) => {
    console.log('Reset password:', email)
  }

  const updateProfile = async (data: any) => {
    setUser({ ...user, ...data })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
