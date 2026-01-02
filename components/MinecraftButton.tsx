function MinecraftButton({text, href} : {text: string, href: string | undefined}) {
    return (
        <a className="bg-stone-500 hover:bg-indigo-300 w-full text-center text-white p-4 text-2xl cursor-pointer text-shadow-lg text-shadow-neutral-700" href={href}>
            {text}
        </a>
    );
}

export default MinecraftButton;