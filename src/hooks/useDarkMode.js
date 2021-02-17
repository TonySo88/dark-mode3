import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialMode) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialMode)

    return [darkMode, setDarkMode]
}