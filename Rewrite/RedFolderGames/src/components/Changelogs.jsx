import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    securityLevel: "strict",
});
function MermaidBlock({ chart }) {
    const [svg, setSvg] = useState("");

    useEffect(() => {
        let mounted = true;

        async function renderChart() {
            try {
                const id = `mermaid-${Math.random().toString(36).slice(2)}`;
                const { svg } = await mermaid.render(id, chart);
                if (mounted) setSvg(svg);
            } catch (error) {
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
        <div
            className="my-6 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 [&>svg]:w-420 [&>svg]:h-100"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}

function MarkdownContent({ content }) {
    return (
        <article className="prose prose-invert max-w-none">
            <ReactMarkdown
                components={{
                    code({ inline, className, children }) {
                        const match = /language-(\w+)/.exec(className || "");
                        const codeString = String(children).replace(/\n$/, "");

                        if (!inline && match?.[1] === "mermaid") {
                            return <MermaidBlock chart={codeString} />;
                        }

                        return <code className={className}>{children}</code>;
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}

export default function ChangelogPage() {
    const markdownText = `
# RedFolderGames — Update Log

## Added
- **Random Empty page system** for unfinished or non-existing routes  
  - Visiting something like \`/example\` redirects to an Empty page  
  - The Empty page returns you to the main site  
  - Small chance of a **special Empty variant** appearing just for fun  

- **Comment pinning mechanic**
  - Comments can switch from \`absolute\` → \`fixed\`
  - Allows the panel to follow your screen instead of being left behind

- **Hidden button**
  - Added just for fun

---

## Changes
- **Folders system updated**
  - Now looks and behaves more like the comment system

- **Terminal fully rewritten**
  - Rewrite completed successfully

---

## Development
- **Tailwind Typography plugin added**
  - Preparing styling support for markdown content

- **React Markdown installed**
  - Not implemented yet
  - Planned for **in-site changelog pages**

---

## Fixes
- Fixed existing **secrets**
- Added **additional secrets**

---

## Known / Pending
- **Footer has not been updated yet**
  - Credits and other requested additions are still missing

---

# Visual Overview

\`\`\`mermaid
flowchart LR

User[User visits page] --> Check{Route exists?}

Check -->|Yes| Normal[Open page normally]
Check -->|No| Empty[Redirect to Empty page]

Empty --> Chance{Empty?}

Chance -->|Yes| Special[Show special Empty variant]
Chance -->|Yes| Standard[Show normal Empty page]

Standard --> Return[Return to main site]
Special --> Return

Return --> Home[Main Site]

Home --> Comment[Comment Section]
Comment --> Pin{Pin enabled?}

Pin -->|Yes| Fixed[Panel becomes fixed]
Pin -->|No| Absolute[Panel stays absolute]

Home --> Secrets[Hidden secrets]
Secrets --> Hidden[Hidden button]
\`\`\`
`;

    return (
        <section className="mx-auto w-full max-w-4xl px-6 py-10">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-lg">
                <MarkdownContent content={markdownText} />
            </div>
        </section>
    );
}