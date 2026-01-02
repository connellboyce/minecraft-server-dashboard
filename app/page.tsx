import MinecraftButton from "@/components/MinecraftButton";
import Image from "next/image";
import SplashText from "@/components/SplashText";

export default function Home() {
  return (
      <main className="w-2/3 mx-auto mt-24">
          <div className="mb-12">
              <Image src="/server_dashboard.png"
                     className=""
                     alt="Server Dashboard"
                     width={8000}
                     height={8000}/>
              <SplashText />
          </div>
          <div className="grid grid-cols-1 place-items-center gap-12 mt-36">
              <MinecraftButton text="Get Server Info" href="/info"/>
              <MinecraftButton text="Manage Server" href="/manage"/>
              <MinecraftButton text="Restart Discord Bot" href="https://minecraft-server-discord-bot-7tev.onrender.com/"/>
              <div className="grid grid-cols-2 gap-12 mt-16 w-full">
                  <MinecraftButton text="GitHub" href="https://github.com/connellboyce/minecraft-server-dashboard"/>
                  <MinecraftButton text="connellboyce.com" href="https://www.connellboyce.com"/>
              </div>
          </div>
      </main>
  );
}
