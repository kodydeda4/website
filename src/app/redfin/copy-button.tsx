"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const INSTALL_CMD = "brew install --cask kodydeda4/tap/redfin";

export function CopyButton() {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={copy}
      className="flex h-11 w-full items-center justify-center gap-2 rounded-full border bg-muted px-6 text-muted-foreground transition-colors hover:text-foreground"
    >
      <code className="font-mono text-xs">{INSTALL_CMD}</code>
      {copied ? <Check className="size-4 shrink-0" /> : <Copy className="size-4 shrink-0" />}
    </button>
  );
}
