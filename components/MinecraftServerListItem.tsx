import Image from "next/image";

function MinecraftServerListItem({name, address, up, playerCount, loading} : {name: string, address: string, up: boolean, playerCount: number, loading: boolean}) {
    return (
        <div className="py-4 grid grid-cols-5 gap-4">
            <Image className="place-self-end" src="/creeper.jpg" alt="Server logo" width={64} height={64} />
            <div className="col-span-2 w-fit">
                <h3 className="text-white text-2xl">{name}</h3>
                <h3 className={(loading ? "text-neutral-600" : (up ? "text-white" : "text-red-600 text-nowrap")) + " text-2xl"}>{loading ? "Pinging..." : (up ? address : "The server is currently offline")}</h3>
            </div>
            <Image className={(loading ? "opacity-0": "") + " justify-self-end"} src={up ? "/on.png" : "/off.png"} alt="Server status icon" width={32} height={5} />
            <p className={(loading ? "opacity-0": "") + " text-white max-w-fit"}>{playerCount}/20</p>
        </div>
    );
}

export default MinecraftServerListItem;