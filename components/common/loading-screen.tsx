"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/app/context/loading-context"

const LoadingScreen = () => {
  const { setIsLoading } = useLoading()
  const [fadeOut, setFadeOut] = useState(false)
  const [visibleLetters, setVisibleLetters] = useState<number[]>([])

  useEffect(() => {
    // Animate letters one by one
    const letterTimers = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) =>
      setTimeout(() => {
        setVisibleLetters((prev) => [...prev, index])
      }, index * 200),
    )

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 800) // 800ms fade duration
    }, 3000) // Always 3 seconds

    return () => {
      letterTimers.forEach((timer) => clearTimeout(timer))
      clearTimeout(fadeOutTimer)
    }
  }, [setIsLoading])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-800 bg-[#001933] ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-row items-end space-x-3">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ease-out ${
              visibleLetters.includes(index) ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }`}
          >
            <img
              src={`/load-logo/${
                index === 0
                  ? "logo"
                  : index === 1
                    ? "i"
                    : index === 2
                      ? "n"
                      : index === 3
                        ? "t"
                        : index === 4
                          ? "a"
                          : index === 5
                            ? "r"
                            : index === 6
                              ? "v"
                              : index === 7
                                ? "cap-A"
                                : "s"
              }.png`}
              alt="IntarVAS Logo"
              className="block"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingScreen
