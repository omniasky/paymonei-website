"use client";

import Editor from "@monaco-editor/react";

interface CodeBlockProps {
  code: string;
  filename: string;
  language?: string;
  variant?: "legacy" | "paymonei";
}

export function CodeBlock({
  code,
  filename,
  language = "typescript",
  variant = "legacy",
}: CodeBlockProps) {
  const isPrimary = variant === "paymonei";

  return (
    <div className="relative">
      <div
        className={`rounded-lg overflow-hidden shadow-xl ${
          isPrimary
            ? "bg-zinc-900 dark:bg-zinc-950 border-2 border-primary"
            : "bg-zinc-900 dark:bg-zinc-950 border border-zinc-700 dark:border-zinc-800"
        }`}
      >
        {/* Mac-style window chrome */}
        <div className="bg-zinc-800 dark:bg-zinc-900 px-4 py-3 border-b border-zinc-700 dark:border-zinc-800 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-zinc-400 ml-1 font-mono">
            {filename}
          </span>
        </div>

        {/* Monaco Editor */}
        <div className="bg-zinc-900 dark:bg-zinc-950">
          <Editor
            height="500px"
            language={language}
            value={code}
            theme="vs-dark"
            options={{
              readOnly: true,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 13,
              lineHeight: 22,
              lineNumbers: "on",
              glyphMargin: false,
              folding: false,
              lineDecorationsWidth: 0,
              lineNumbersMinChars: 4,
              renderLineHighlight: "none",
              scrollbar: {
                vertical: "auto",
                horizontal: "auto",
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
              overviewRulerLanes: 0,
              hideCursorInOverviewRuler: true,
              cursorStyle: "line",
              cursorBlinking: "solid",
              wordWrap: "on",
              wrappingStrategy: "advanced",
              padding: { top: 16, bottom: 16 },
              contextmenu: false,
              selectOnLineNumbers: false,
            }}
          />
        </div>
      </div>
    </div>
  );
}
