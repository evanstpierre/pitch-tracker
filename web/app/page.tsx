

export default function Home() {
  return (
      <main className=" relative flex min-h-screen w-full flex-col
          items-center justify-center gap-y-5
          bg-[#1D2D5C] dark:bg-[#1D2D5C]">
        
        <div>
          <span className="text-xl">Baseball Pitch Tracer</span>
        </div>

        <div className=" flex  items-center justify-center flex-col gap-y-5 h-[350px] w-[500px] bg-[#F9F5F0] rounded">
          <div className="w-[475px] h-[275px] bg-[#D9D9D9]" ></div>
          <span className="text-[#BF092F]">START</span>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <span className="opacity-75">Built by Evan St Pierre | Toronto Canada</span>
        </div>

      </main>
  );
}
