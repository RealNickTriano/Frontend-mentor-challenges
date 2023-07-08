import Link from "next/link";

export default function Home() {
  const challenges = [
    {
      ref: "/qr-code-component",
      name: "QR Code Component",
    },
    {
      ref: "/results-summary-component",
      name: "Results Summary Component",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-4">
      {challenges.map((item) => {
        return (
          <Link href={item.ref} className="hover:text-blue-400">
            {item.name}
          </Link>
        );
      })}
    </main>
  );
}
