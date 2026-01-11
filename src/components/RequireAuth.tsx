import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = "/login"
    }
  }, [loading, user])

  if (!user) return null

  return <>{children}</>
}

