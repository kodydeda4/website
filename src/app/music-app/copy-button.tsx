"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const INSTALL_CMD = "brew install --cask kodydeda4/tap/music";

export function CopyButton() {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-2">
      <code className="font-mono text-sm">{INSTALL_CMD}</code>
      <button onClick={copy} className="text-muted-foreground hover:text-foreground transition-colors">
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}
