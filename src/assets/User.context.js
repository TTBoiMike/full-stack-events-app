import React from 'react'

export const User = React.createContext({})

export function useUser() {
    return React.useContext(User)
}