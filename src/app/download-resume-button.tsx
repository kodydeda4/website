"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadResumeButton() {
  const [loading, setLoading] = useState(false);

  async function download() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/resume");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume-kody-deda.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      size="lg"
      className="h-11 gap-2 rounded-full px-6 text-base"
      onClick={download}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="size-5 animate-spin" />
      ) : (
        <Download className="size-5" />
      )}
      Download Resume
    </Button>
  );
}
