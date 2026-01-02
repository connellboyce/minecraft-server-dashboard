import MinecraftButton from "@/components/MinecraftButton";
import MinecraftTextbox from "@/components/MinecraftTextbox";

export default function Info() {
    return (
        <main className="w-1/3 mx-auto mt-24">
            <h1 className="text-white text-3xl text-center">Server Info</h1>
            <MinecraftTextbox label="Server Address" text="minecraft.connellboyce.com" />
            <div className="grid grid-cols-1 pt-4">
                <MinecraftButton text="Back" href="/" />
            </div>


        </main>
    );
}