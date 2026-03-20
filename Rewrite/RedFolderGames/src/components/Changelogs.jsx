import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

function MermaidBlock({ chart }) {
    const [svg, setSvg] = useState("");

    useEffect(() => {
        let mounted = true;

        async function renderChart() {
            try {
                const mermaidModule = await import("mermaid");
                const mermaid = mermaidModule.default;

                mermaid.initialize({
                    startOnLoad: false,
                    theme: "dark",
                    securityLevel: "strict",
                    themeVariables: {
                        fontSize: "25px",
                        edgeLabelBackground: "rgb(11, 11, 11)",
                    },
                    flowchart: {
                        useMaxWidth: true,
                        htmlLabels: true,
                        nodeSpacing: 40,
                        rankSpacing: 50,
                    },
                });

                const id = `mermaid-${Math.random().toString(36).slice(2)}`;
                const result = await mermaid.render(id, chart);

                if (mounted) setSvg(result.svg);
            } catch (err) {
                console.error("Mermaid render failed:", err);
                if (mounted) {
                    setSvg(`<pre>Failed to render Mermaid diagram</pre>`);
                }
            }
        }

        renderChart();

        return () => {
            mounted = false;
        };
    }, [chart]);

    return (
        <div className="my-3 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <div
                className="[&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
                dangerouslySetInnerHTML={{ __html: svg }}
            />
        </div>
    );
}

function MarkdownContent({ content }) {
    return (
        <article className="prose prose-invert max-w-none">
            <ReactMarkdown
                components={{
                    code({ className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        const codeString = String(children).replace(/\n$/, "");

                        if (match?.[1] === "mermaid") {
                            return <MermaidBlock chart={codeString} />;
                        }

                        return (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}

export default function ChangelogPage() {
    const [content, setContent] = useState("");
    const [logs, setLogs] = useState([]);
    const [currentFile, setCurrentFile] = useState("");

    useEffect(() => {
        async function loadLogs() {
            try {
                //const res = await fetch(`${import.meta.env.BASE_URL}logs/logs.json`);
                const res = await fetch(`${import.meta.env.BASE_URL}Rewrite/RedFolderGames/public/logs/logs.json`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();

                setLogs(data.logs);
                setCurrentFile(data.latest);

                const mdRes = await fetch(`${import.meta.env.BASE_URL}logs/${data.latest}`);
                if (!mdRes.ok) throw new Error(`HTTP ${mdRes.status}`);
                const mdText = await mdRes.text();
                setContent(mdText);
            } catch (err) {
                console.error("Load failed:", err);
                setContent("# Failed to load changelog");
            }        }

        loadLogs();
    }, []);

    async function openLog(file) {
        try {
            setCurrentFile(file);

            const res = await fetch(`${import.meta.env.BASE_URL}logs/${file}`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const text = await res.text();

            setContent(text);
        } catch (err) {
            console.error("Open failed:", err);
            setContent("# Failed to load changelog");
        }
    }

    return (
        <section className="mx-auto w-full max-w-5xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-[220px_1fr]">
                <aside className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg">
                    <h2 className="mb-4 text-lg font-bold text-white">Changelogs</h2>

                    <div className="flex flex-col gap-2">
                        {logs.map((log) => (
                            <button
                                key={log.file}
                                onClick={() => openLog(log.file)}
                                className={`rounded-lg px-3 py-2 text-left transition ${currentFile === log.file
                                    ? "bg-zinc-700 text-white"
                                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                                    }`}
                            >
                                <div className="font-medium">{log.title}</div>
                                <div className="text-xs text-zinc-400">{log.date}</div>
                            </button>
                        ))}
                    </div>
                </aside>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-lg">
                    {!content ? (
                        <p className="text-zinc-400">Loading...</p>
                    ) : (
                        <MarkdownContent content={content} />
                    )}
                </div>
            </div>
        </section>
    );
}