import { useState, useEffect } from "react"

function DraggableWindow() {
    const [position, setPosition] = useState({ x: 200, y: 120 })
    const [dragging, setDragging] = useState(false)
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    const handleMouseDown = (e) => {
        e.preventDefault()

        setDragging(true)

        document.body.style.userSelect = "none"

        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        })
    }

    const handleMouseMove = (e) => {
        if (!dragging) return

        setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y
        })
    }

    const handleMouseUp = () => {
        setDragging(false)
        document.body.style.userSelect = ""
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp)
        }
    })

    return (
        <div className="absolute w-80 rounded-xl bg-zinc-900 text-white shadow-xl"
             style={{ left: position.x, top: position.y }}
        >
            <div
                onMouseDown={handleMouseDown}
                className="cursor-move select-none rounded-t-xl bg-zinc-800 px-4 py-2 font-bold"
            >
                Reply Window
            </div>

            <div className="p-4">
                draggable content here
            </div>
        </div>
    )
}

export default DraggableWindow