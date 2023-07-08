import Image from "next/image";
import { Hanken_Grotesk } from "@next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  const summarys = [
    {
      category: "Reaction",
      score: 80,
      icon: "/results-summary-component-main/assets/images/icon-reaction.svg",
      textColor: "text-light-red",
      bgColor: "bg-light-red/20",
    },
    {
      category: "Memory",
      score: 92,
      icon: "/results-summary-component-main/assets/images/icon-memory.svg",
      textColor: "text-orangey-yellow",
      bgColor: "bg-orangey-yellow/20",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "/results-summary-component-main/assets/images/icon-verbal.svg",
      textColor: "text-green-teal",
      bgColor: "bg-green-teal/20",
    },
    {
      category: "Visual",
      score: 72,
      icon: "/results-summary-component-main/assets/images/icon-visual.svg",
      textColor: "text-cobalt-blue",
      bgColor: "bg-cobalt-blue/20",
    },
  ];

  return (
    <div className={hankenGrotesk.className}>
      <div className="sm:min-h-screen sm:bg-pale-blue sm:flex sm:justify-center sm:items-center">
        <div className="flex flex-col sm:flex-row sm:bg-white sm:shadow-lg sm:rounded-3xl justify-start items-start min-h-screen sm:min-h-0 gap-6 sm:gap-0 sm:h-[500px] sm:w-[700px]">
          <div className="bg-gradient-to-b from-5% from-light-slate-blue to-light-royal-blue rounded-b-3xl flex flex-col justify-start items-center gap-4 sm:gap-6 py-6 sm:h-full sm:rounded-3xl sm:py-10">
            <h1 className="text-light-lavender text-xl sm:text-2xl font-semibold">
              Your Result
            </h1>
            <div className="bg-gradient-to-b from-violet-blue to-persian-blue rounded-full flex flex-col justify-center items-center gap-2 h-[140px] w-[140px] sm:h-[200px] sm:w-[200px]">
              <h1 className="text-6xl font-bold text-white sm:text-7xl">76</h1>
              <h2 className="text-light-lavender/50 font-semibold sm:text-lg">
                of 100
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
              <h1 className="font-bold text-white text-3xl">Great</h1>
              <h1 className="px-16 sm:px-10 text-light-lavender text-center text-[18px]">
                You scored higher than 65% of the people who have taken these
                tests.
              </h1>
            </div>
          </div>
          <div className="px-8 sm:pt-8 w-full">
            <h1 className="text-xl font-bold mb-6 sm:text-2xl">Summary</h1>
            <div className="flex flex-col justify-center items-center gap-6 sm:gap-4">
              {summarys.map((item) => {
                return (
                  <div
                    className={`${item.bgColor} w-full flex justify-between items-center p-4 rounded-lg`}
                  >
                    <div className="flex justify-center items-center gap-2">
                      <Image
                        src={item.icon}
                        alt="some_icon"
                        width={25}
                        height={25}
                      />
                      <h1 className={`${item.textColor} font-bold text-lg`}>
                        {item.category}
                      </h1>
                    </div>
                    <h1 className=" flex justify-center items-center gap-2">
                      <span className="font-bold text-lg">{item.score}</span>
                      <span className="text-gray-400/70 font-bold text-lg">
                        {" "}
                        <span>/ 100</span>
                      </span>
                    </h1>
                  </div>
                );
              })}
              <button className="px-24 bg-dark-gray-blue rounded-full py-4 w-full font-semibold text-xl text-white sm:mt-4 hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue hover:from-10%">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
