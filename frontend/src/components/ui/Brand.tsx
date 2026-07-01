import Link from "next/link";

export function Brand({ subtitle = "AI Financial Operating System" }: { subtitle?: string }) {
  return (
    <Link href="/" className="brand">
      <div className="logo">X</div>
      <div>
        SAHM X
        <small>{subtitle}</small>
      </div>
    </Link>
  );
}
