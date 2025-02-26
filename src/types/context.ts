import { UserEntity } from "./entities"

export interface AuthContextType {
  isAuthenticated: boolean
  user: UserEntity
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}
