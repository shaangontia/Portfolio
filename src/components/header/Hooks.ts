import { useEffect, useState } from 'react'

export function useScrollTop() {
    const [scrollTop, setScrollTop] = useState(0)
    useEffect(() => {
        const updatePosition = () => {
            console.log('updated position')
            setScrollTop(window.pageYOffset)
        }
        window.addEventListener('scroll', updatePosition)
        updatePosition()
        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollTop
}
