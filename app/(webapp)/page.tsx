import { Github } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-gray-1 px-4 flex grow-[1] flex-col items-center justify-center">
      <div className="max-w-sm flex flex-col">
        <h1 className="text-gray-12 font-medium text-2xl md:text-3xl tracking-tighter mb-1 text-center">
          Onframe Chess
        </h1>
        <p className="text-gray-11 text-base leading-normal mb-4 text-center">
          Fully featured chess game with Farcaster Frames. If you like this, you&apos;ll love{' '}
          <a
            className="transition-colors focus-visible:rounded-sm hover:text-gray-12 underline decoration-dotted"
            href="https://twitter.com/curta_ctf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Curta
          </a>
          .
        </p>
        <div className="w-full gap-1 flex flex-col">
          <a
            className="h-8 px-3 font-medium text-sm rounded bg-gray-3 gap-1.5 w-full hover:bg-gray-4 active:bg-gray-5 border border-gray-7 hover:border-gray-8 transition-colors flex items-center justify-center"
            href="https://github.com/fiveoutofnine/onframe-chess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="size-4 w-4 flex items-center justify-center">
              <Github />
            </span>
            <span>fiveoutofnine/onframe-chess</span>
          </a>
        </div>
      </div>
    </main>
  );
}
