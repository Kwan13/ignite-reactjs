import { useEffect, useState } from 'react'

interface ISetScrollPositionProps {
  top: number
  behavior?: 'auto' | 'smooth'
}

export function useScroll() {
  const [scrollYProgress, setScrollYProgress] = useState(0)

  function setScrollPosition({
    top,
    behavior = 'auto',
  }: ISetScrollPositionProps) {
    window.scrollTo({
      top,
      behavior,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollYProgress(window.scrollY)
    })

    return () =>
      window.removeEventListener('scroll', () =>
        setScrollYProgress(window.scrollY),
      )
  }, [scrollYProgress])

  return { scrollYProgress, setScrollPosition }
}
