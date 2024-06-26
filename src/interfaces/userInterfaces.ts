import { ReactNode } from 'react'

export interface UserState {
    user: any
    userLoading: boolean
    tokens: {
        accessToken: string | null
        refreshToken: string | null
        accessTokenExpireAt: string | null
        refreshTokenExpireAt: string | null
    }
}

export type UserAction =
    | { type: 'clearUser' }
    | { type: 'clearTokens' }
    | { type: 'activeLoading' }
    | { type: 'disactiveLoading' }
    | { type: 'setUser'; payload: any }
    | { type: 'setTokens'; payload: UserState['tokens'] }

export interface UserContextType {
    getUser: Function
    logoutUser: Function
    userState: UserState
    userDispatch: React.Dispatch<UserAction>
}

export interface UserProviderProps {
    children: ReactNode
}

export const initialState: UserState = {
    user: null,
    userLoading: false,
    tokens: {
        accessToken: null,
        refreshToken: null,
        accessTokenExpireAt: null,
        refreshTokenExpireAt: null,
    },
}
