import { useEffect, useState } from 'react'

export const useDebounce = (searchValue: string, delay = 500): string =>  {
    const [debounced, setDebounced] = useState(searchValue)

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(searchValue), delay)
        return () => clearTimeout(handler)
    },[searchValue, delay])
    return debounced
}