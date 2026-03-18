import { useState, useEffect } from 'react'
import Button from "@mui/material/Button"

function CommentsSection({ comments, addComment }) {
    const [sectionIds, setSectionIds] = useState([])

    const [feedVisible, setFeedVisible] = useState(false)
    const [makerVisible, setMakerVisible] = useState(false)

    const [feedMinimized, setFeedMinimized] = useState(false)
    const [makerMinimized, setMakerMinimized] = useState(false)
    const [replyMinimized, setReplyMinimized] = useState(false)
    const [feedPinned, setFeedPinned] = useState(false)
    const [makerPinned, setMakerPinned] = useState(false)

    const [feedPosition, setFeedPosition] = useState({ x: 32, y: 120 })
    const [makerPosition, setMakerPosition] = useState({ x: 430, y: 120 })

    const [draggingWindow, setDraggingWindow] = useState(null)
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    const [commentText, setCommentText] = useState("")
    const [name, setName] = useState("")
    const [sectionId, setSectionId] = useState("general")

    const [replyTarget, setReplyTarget] = useState(null)
    const [replyName, setReplyName] = useState("")
    const [replyText, setReplyText] = useState("")

    const [dockPosition, setDockPosition] = useState({ x: 12, y: 280 })
    const [dockCollapsed, setDockCollapsed] = useState(false)
    const [dockAnimating, setDockAnimating] = useState(false)

    useEffect(() => {
        const sections = document.querySelectorAll("section")
        const ids = Array.from(sections)
            .map((section) => section.getAttribute("id"))
            .filter(Boolean)

        setSectionIds(ids)
    }, [])

    const prettyId = (id) =>
        id
            ? id.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
            : "General"

    const handleMouseDown = (e, windowType) => {
        e.preventDefault()
        document.body.style.userSelect = "none"
        setDraggingWindow(windowType)

        if (windowType === "feed") {
            setOffset({
                x: e.clientX - feedPosition.x,
                y: e.clientY - feedPosition.y
            })
        }

        if (windowType === "maker") {
            setOffset({
                x: e.clientX - makerPosition.x,
                y: e.clientY - makerPosition.y
            })
        }
    }

    const handleMouseMove = (e) => {
        if (!draggingWindow) return

        const newPos = {
            x: e.clientX - offset.x,
            y: e.clientY - offset.y
        }

        if (draggingWindow === "feed") {
            setFeedPosition(newPos)
        }

        if (draggingWindow === "maker") {
            setMakerPosition(newPos)
        }
    }

    const clamp = (value, min, max) => {
        return Math.min(Math.max(value, min), max)
    }
    const handleDockDrag = (e) => {
        const startX = e.clientX
        const startY = e.clientY

        const initialX = dockPosition.x
        const initialY = dockPosition.y

        setDockAnimating(false)

        const onMove = (moveEvent) => {
            const rawX = initialX + (moveEvent.clientX - startX)
            const rawY = initialY + (moveEvent.clientY - startY)

            setDockPosition({
                x: rawX,
                y: rawY
            })
        }

        const onUp = () => {
            const dockWidth = dockCollapsed ? 40 : 120
            const dockHeight = dockCollapsed ? 80 : 260
            const padding = 8

            const minX = padding
            const minY = padding
            const maxX = window.innerWidth - dockWidth - padding
            const maxY = window.innerHeight - dockHeight - padding

            setDockAnimating(true)

            setDockPosition((prev) => ({
                x: clamp(prev.x, minX, maxX),
                y: clamp(prev.y, minY, maxY)
            }))

            window.removeEventListener("mousemove", onMove)
            window.removeEventListener("mouseup", onUp)
        }

        window.addEventListener("mousemove", onMove)
        window.addEventListener("mouseup", onUp)
    }

    const handleMouseUp = () => {
        setDraggingWindow(null)
        document.body.style.userSelect = ""
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp)
            document.body.style.userSelect = ""
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        addComment(
            e,
            sectionId,
            name.trim() || "Guest",
            commentText,
            null
        )

        setCommentText("")
    }

    const handleReplySubmit = (e) => {
        e.preventDefault()

        if (!replyTarget) return

        addComment(
            e,
            replyTarget.section_id,
            replyName.trim() || "Guest",
            replyText,
            replyTarget.id
        )

        setReplyText("")
        setReplyName("")
        setReplyTarget(null)
        setReplyMinimized(false)
    }

    const topLevelComments = (Array.isArray(comments) ? comments : []).filter(
        (comment) => comment.parent_id === null || comment.parent_id === undefined
    )

    const getReplies = (parentId) =>
        (Array.isArray(comments) ? comments : []).filter(
            (comment) => Number(comment.parent_id) === Number(parentId)
        )

    const hideAll = () => {
        setFeedVisible(false)
        setMakerVisible(false)
        setReplyTarget(null)
    }

    const openAll = () => {
        setFeedVisible(true)
        setMakerVisible(true)
        setFeedMinimized(false)
        setMakerMinimized(false)
    }

    const callAll = () => {
        const baseX = window.scrollX + 32
        const baseY = window.scrollY + 80

        setFeedPosition({
            x: baseX,
            y: baseY
        })

        setMakerPosition({
            x: baseX + 460,
            y: baseY
        })

        setFeedVisible(true)
        setMakerVisible(true)
        setFeedMinimized(false)
        setMakerMinimized(false)
    }

    const callFeed = () => {
        setFeedPosition({
            x: window.scrollX + 32,
            y: window.scrollY + 80
        })
        setFeedVisible(true)
        setFeedMinimized(false)
    }

    const callMaker = () => {
        setMakerPosition({
            x: window.scrollX + 460,
            y: window.scrollY + 80
        })
        setMakerVisible(true)
        setMakerMinimized(false)
    }

    const toggleFeedPin = () => {
        setFeedPosition((prev) => ({
            x: feedPinned ? prev.x + window.scrollX : prev.x - window.scrollX,
            y: feedPinned ? prev.y + window.scrollY : prev.y - window.scrollY
        }))

        setFeedPinned((prev) => !prev)
    }

    const toggleMakerPin = () => {
        setMakerPosition((prev) => ({
            x: makerPinned ? prev.x + window.scrollX : prev.x - window.scrollX,
            y: makerPinned ? prev.y + window.scrollY : prev.y - window.scrollY
        }))

        setMakerPinned((prev) => !prev)
    }

    const DockButton = ({ onClick, children }) => (
        <button
            type="button"
            onClick={onClick}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white shadow-[5px_5px_25px_rgba(255,255,255,0.18)] backdrop-blur-md transition hover:bg-white/10"
        >
            {children}
        </button>
    )

    const WindowDots = ({ pinned, onPin, onMinimize, onClose }) => (
        <div
            className="flex gap-2"
            onMouseDown={(e) => e.stopPropagation()}
        >
            <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation()
                    onPin?.()
                }}
                className={`flex h-4 w-4 items-center justify-center rounded-full ${pinned ? "bg-green-400" : "bg-green-500"
                    }`}
                title={pinned ? "Unpin window" : "Pin window"}
            >
                <span className="relative bottom-px text-[10px] font-bold text-green-950/70">
                    {pinned ? "•" : "o"}
                </span>
            </button>

            <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation()
                    onMinimize?.()
                }}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500"
                title="Minimize"
            >
                <span className="relative bottom-1.25 text-[16px] font-bold text-yellow-950/70">-</span>
            </button>

            <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation()
                    onClose?.()
                }}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500"
                title="Close"
            >
                <span className="relative bottom-px text-[10px] font-bold text-red-950/70">x</span>
            </button>
        </div>
    )

    return (
        <>
            {/* DOCK / CONTROL PANEL */}
            <div
                className={`fixed z-50 ${dockAnimating ? "transition-all duration-600 ease-out" : ""}`}
                style={{
                    left: dockPosition.x,
                    top: dockPosition.y
                }}
            >
                {dockCollapsed ? (
                    <button
                        type="button"
                        onClick={() => {
                            setDockCollapsed(false)
                            setDockPosition((prev) => ({
                                x: 18,
                                y: prev.y
                            }))
                        }}
                        className="rounded-r-xl border border-white/10 bg-zinc-900/90 px-3 py-6 text-xs text-green-400 shadow-lg backdrop-blur hover:bg-zinc-800/90 font-mono"
                        title="Open system panel"
                    >
                        &gt;
                    </button>
                ) : (
                    <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-zinc-900/90 p-2 shadow-lg backdrop-blur">
                        {/* HANDLE / HEADER */}
                        <div className="flex items-center justify-between gap-2">
                            <div
                                onMouseDown={handleDockDrag}
                                className="cursor-move rounded-md border border-green-500/30 bg-zinc-950 px-3 py-1 text-xs font-mono text-green-400 select-none"
                            >
                                system.panel
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setDockCollapsed(true)
                                    setDockPosition((prev) => ({
                                        x: 0,
                                        y: prev.y
                                    }))
                                }}
                                className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white hover:bg-white/10"
                                title="Collapse panel"
                            >
                                &lt;
                            </button>
                        </div>

                        {/* BUTTONS */}
                        <DockButton onClick={hideAll}>Hide all</DockButton>
                        <DockButton onClick={openAll}>Open all</DockButton>
                        <DockButton onClick={callAll}>Call all</DockButton>
                        <DockButton onClick={callFeed}>Feed</DockButton>
                        <DockButton onClick={callMaker}>Write</DockButton>
                    </div>
                )}
            </div>

            {/* COMMENTS FEED WINDOW */}
            {feedVisible && (
                <div
                    className={`${feedPinned ? "fixed" : "absolute"} z-50`}
                    style={{ left: feedPosition.x, top: feedPosition.y }}
                >
                    <div className="w-115 overflow-hidden rounded-xl border border-white/10 bg-white/5 text-white shadow-[5px_5px_25px_rgba(255,255,255,0.25)] backdrop-blur-md">

                        {/* TOP BAR */}
                        <div
                            onMouseDown={(e) => {
                                if (!feedPinned) handleMouseDown(e, "feed")
                            }}
                            className={`select-none border-b border-white/10 ${feedPinned ? "cursor-default" : "cursor-move"}`}
                        >
                            <div className="flex items-center justify-between px-4 pt-2">
                                <div className="text-xs text-zinc-400">
                                    Comments / Feed.txt
                                </div>

                                <WindowDots
                                    pinned={feedPinned}
                                    onPin={toggleFeedPin}
                                    onMinimize={() => setFeedMinimized((prev) => !prev)}
                                    onClose={() => {
                                        setFeedVisible(false)
                                        setReplyTarget(null)
                                        setFeedMinimized(false)
                                    }}
                                />
                            </div>

                            <div className="px-4 pb-3 pt-2">
                                <h2 className="text-2xl font-bold text-white">Comments Feed</h2>
                                <p className="text-sm text-zinc-400">
                                    Browse comments and replies
                                </p>
                            </div>
                        </div>

                        {!feedMinimized && (
                            <div className="max-h-140 overflow-y-auto px-4 py-4 space-y-4">
                                {topLevelComments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-4"
                                    >
                                        <p className="mb-2 text-sm text-zinc-400">
                                            {comment.name || "Guest"} · {prettyId(comment.section_id)} · #{comment.id}
                                        </p>

                                        <p className="text-lg leading-relaxed text-zinc-100">
                                            {comment.comment}
                                        </p>

                                        <div className="mt-3 flex justify-end">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setReplyTarget(comment)
                                                    setReplyMinimized(false)
                                                }}
                                                className="text-base text-zinc-300 transition hover:text-white"
                                            >
                                                ➥ Reply
                                            </button>
                                        </div>

                                        <div className="mt-4 space-y-3 border-l border-white/10 pl-4">
                                            {getReplies(comment.id).map((reply) => (
                                                <div
                                                    key={reply.id}
                                                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-3"
                                                >
                                                    <p className="mb-1 text-xs text-zinc-300">
                                                        {reply.name || "Guest"} · reply · #{reply.id}
                                                    </p>

                                                    <p className="text-base leading-relaxed text-zinc-100">
                                                        {reply.comment}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* REPLY WINDOW */}
                    {replyTarget && (
                        <div className="absolute left-117.5 top-0 w-[320px] overflow-hidden rounded-xl border border-white/10 bg-white/5 text-white shadow-[5px_5px_25px_rgba(255,255,255,0.25)] backdrop-blur-md">
                            <div className="border-b border-white/10">
                                <div className="flex items-center justify-between px-4 pt-2">
                                    <div className="text-xs text-zinc-400">
                                        Comments / Reply.txt
                                    </div>

                                    <WindowDots
                                        onMinimize={() => setReplyMinimized((prev) => !prev)}
                                        onClose={() => {
                                            setReplyTarget(null)
                                            setReplyName("")
                                            setReplyText("")
                                            setReplyMinimized(false)
                                        }}
                                    />
                                </div>

                                <div className="px-4 pb-3 pt-2">
                                    <h3 className="text-xl font-bold">Reply</h3>
                                    <p className="text-sm text-zinc-400">
                                        Responding to comment #{replyTarget.id}
                                    </p>
                                </div>
                            </div>

                            {!replyMinimized && (
                                <form onSubmit={handleReplySubmit} className="space-y-2 p-4">
                                    <input
                                        type="text"
                                        value={replyTarget.section_id}
                                        readOnly
                                        className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-zinc-400 outline-none"
                                    />

                                    <input
                                        type="text"
                                        value={replyTarget.id}
                                        readOnly
                                        className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-zinc-400 outline-none"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        value={replyName}
                                        onChange={(e) => setReplyName(e.target.value)}
                                        className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-white placeholder-zinc-400 outline-none"
                                    />

                                    <textarea
                                        placeholder="Write reply..."
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        className="min-h-30 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-white placeholder-zinc-400 outline-none"
                                    />

                                    <div className="flex gap-2">
                                        <button
                                            type="submit"
                                            className="flex-1 rounded-lg border border-white/10 bg-white/10 px-3 py-2 font-semibold text-white transition hover:bg-white/15"
                                        >
                                            Send Reply
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setReplyTarget(null)
                                                setReplyName("")
                                                setReplyText("")
                                                setReplyMinimized(false)
                                            }}
                                            className="flex-1 rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 font-semibold text-white transition hover:bg-zinc-800"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* COMMENT MAKER WINDOW */}
            {makerVisible && (
                <div
                    className={`${makerPinned ? "fixed" : "absolute"} z-50`}
                    style={{ left: makerPosition.x, top: makerPosition.y }}
                >
                    <div className="w-95 overflow-hidden rounded-xl border border-white/10 bg-white/5 text-white shadow-[5px_5px_25px_rgba(255,255,255,0.25)] backdrop-blur-md">

                        {/* TOP BAR */}
                        <div
                            onMouseDown={(e) => {
                                if (!makerPinned) handleMouseDown(e, "maker")
                            }}
                            className={`select-none border-b border-white/10 ${makerPinned ? "cursor-default" : "cursor-move"}`}
                        >
                            <div className="flex items-center justify-between px-4 pt-2">
                                <div className="text-xs text-zinc-400">
                                    Comments / Maker.txt
                                </div>

                                <WindowDots
                                    pinned={makerPinned}
                                    onPin={toggleMakerPin}
                                    onMinimize={() => setMakerMinimized((prev) => !prev)}
                                    onClose={() => {
                                        setMakerVisible(false)
                                        setCommentText("")
                                        setName("")
                                        setMakerMinimized(false)
                                    }}
                                />
                            </div>

                            <div className="px-4 pb-3 pt-2">
                                <h2 className="text-xl font-bold text-white">Comment Maker</h2>
                                <p className="text-sm text-zinc-400">
                                    Create a new top-level comment
                                </p>
                            </div>
                        </div>

                        {!makerMinimized && (
                            <form onSubmit={handleSubmit} className="space-y-3 p-4">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-white placeholder-zinc-400 outline-none"
                                />

                                <div>
                                    <p className="mb-2 text-sm text-zinc-400">Select section</p>

                                    <div className="max-h-40 overflow-y-auto rounded-lg border border-white/10 bg-zinc-950/70 p-2 space-y-1">
                                        <button
                                            type="button"
                                            onClick={() => setSectionId("general")}
                                            className={`w-full rounded-md px-2 py-1 text-left text-sm transition ${sectionId === "general"
                                                ? "bg-white/15 text-white"
                                                : "bg-white/5 text-zinc-200 hover:bg-white/10"
                                                }`}
                                        >
                                            General
                                        </button>

                                        {sectionIds.map((id) => (
                                            <button
                                                key={id}
                                                type="button"
                                                onClick={() => setSectionId(id)}
                                                className={`w-full rounded-md px-2 py-1 text-left text-sm transition ${sectionId === id
                                                    ? "bg-white/15 text-white"
                                                    : "bg-white/5 text-zinc-200 hover:bg-white/10"
                                                    }`}
                                            >
                                                {prettyId(id)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <textarea
                                    placeholder="Add a comment..."
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    className="min-h-30 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-white placeholder-zinc-400 outline-none"
                                />

                                <button
                                    type="submit"
                                    className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 font-semibold text-white transition hover:bg-white/15"
                                >
                                    Add Comment
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default CommentsSection