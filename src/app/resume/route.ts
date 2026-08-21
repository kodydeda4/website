export const revalidate = 3600; // recheck every hour

const SOURCE_URL =
  "https://github.com/kodydeda4/resume/raw/main/main/resume-kody-deda.pdf";

export async function GET() {
  const res = await fetch(SOURCE_URL);
  if (!res.ok) {
    return new Response("Resume unavailable", { status: 502 });
  }

  return new Response(res.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="resume-kody-deda.pdf"',
    },
  });
}
