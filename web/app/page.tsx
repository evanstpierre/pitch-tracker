

export default function Home() {
  return (
      <main className=" relative flex min-h-screen w-full flex-col
          items-center justify-center gap-y-5
          bg-[#1D2D5C] dark:bg-[#1D2D5C]">
        <div className="h-screen w-full flex  w-full flex-col
          items-center justify-center gap-y-5" >
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
        </div>
        <div className="w-full h-[3px] bg-[#D9D9D9]">

        </div>
        <div className="h-screen w-full flex  w-full flex-col
          items-center justify-evenly bg-[#1D2D5C]">
          <div className="flex w-4/5 justify-evenly">
            <div className="max-w-[300px]">
              <span>What video should I upload?</span>
              <p>Files must be in MP4 format. Video should be shot on a stable tripod from behind the pitcher. Use good lighting and contrast for best results. MLB pitches from broadcast view (camera in center field) are ideal.</p>
            </div>
            <div className="max-w-[300px]">
              <span>How long will it take?</span>
              <p>This process is automated and can take as little as a few minutes for the process to be complete.</p>
            </div>
            <div className="max-w-[300px]">
              <span>How can I use it?</span>
              <p>Currently access is restricted  and users are required to get an access token. Email me at evanlstpierre@gmail.com for more information.</p>
            </div>
          </div>
          <div>
            <button className="bg-[#F9F5F0] w-[200px] h-[50px] rounded text-[#BF092F]">
              Upload Video
            </button>
          </div>
        </div>
        

      </main>
  );
}
