"use client"

import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">("dark")

    React.useEffect(() => {
        // Get initial theme from localStorage or default to dark
        const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "dark"
        setTheme(savedTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)

        // Update document class and localStorage
        document.documentElement.classList.remove("dark", "light")
        document.documentElement.classList.add(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full hover:bg-orange-500/10 transition-all duration-300 group flex items-center justify-center"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <Sun
                    className={`absolute w-5 h-5 transition-all duration-300 ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                        } text-orange-500`}
                />
                <Moon
                    className={`absolute w-5 h-5 transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                        } text-orange-500`}
                />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-orange-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
        </Button>
    )
}
