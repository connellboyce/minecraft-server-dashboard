function MinecraftButton({text, onClick, disabled} : {text: string, onClick: ()=>void, disabled: boolean}) {
    if (disabled) {
        return (
            <div className="bg-stone-700 w-full text-center text-neutral-500 p-4 text-2xl cursor-not-allowed text-shadow-lg text-shadow-neutral-700">
                {text}
            </div>
        );
    } else {
        return (
            <a className="bg-stone-500 hover:bg-indigo-300 w-full text-center text-white p-4 text-2xl cursor-pointer text-shadow-lg text-shadow-neutral-700"
               onClick={onClick}>
                {text}
            </a>
        );
    }
}

export default MinecraftButton;