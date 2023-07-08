import Image from "next/image";

export default function QrCode() {
  return (
    <div className="bg-blue-100 min-h-screen justify-center items-center flex">
      <div className="flex flex-col justify-center items-center p-4 bg-white rounded-xl w-80 gap-4 pb-10 shadow-lg">
        <Image
          src="/qr-code-component/images/image-qr-code.png"
          alt="QR Code"
          width={300}
          height={300}
          className="rounded-xl"
        />
        <div className="px-4 flex justify-center items-center gap-4 flex-col">
          <h1 className="text-xl text-center font-bold text-blue-900">
            Improve your front-end skills by building projects
          </h1>
          <h2 className="text-sm text-center text-gray-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </h2>
        </div>
      </div>
    </div>
  );
}
