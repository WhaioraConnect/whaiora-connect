import { ReactNode } from "react"
import { useAuth } from "@/hooks/useAuth"

type Props = {
  children: ReactNode
  fallback?: ReactNode
}

export function AuthGuard({
  children,
  fallback = null
}: Props) {
  const { user, loading } = useAuth()

  if (loading) {
    return null // or a skeleton
  }

  if (!user) {
    return fallback
  }

  return <>{children}</>
}

