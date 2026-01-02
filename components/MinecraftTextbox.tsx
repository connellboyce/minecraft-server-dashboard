function MinecraftTextbox({label, text} : {label: string, text: string}) {
    return (
        <div className="py-4">
            <p className="text-2xl text-neutral-400">{label}</p>
            <div className="bg-black w-full text-center text-white p-4 text-2xl cursor-copy border-4 border-white">
                {text}
            </div>
        </div>
    );
}

export default MinecraftTextbox;