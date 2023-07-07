import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/qr-code-component" className="hover:text-blue-400">
        QR Code Component
      </Link>
    </main>
  );
}
