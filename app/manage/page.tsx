'use client';

import MinecraftServerListItem from "@/components/MinecraftServerListItem";
import MinecraftButton from "@/components/MinecraftButton";
import {useEffect, useState} from "react";
import ScriptableMinecraftButton from "@/components/ScriptableMinecraftButton";

export default function Manage() {
    const [isLoading, setIsLoading] = useState(true);
    const [isStarting, setIsStarting] = useState(false);
    const [isStopping, setIsStopping] = useState(false);
    const [serverUp, setServerUp] = useState(false);
    const [playerCount, setPlayerCount] = useState(0);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await fetch('/api/status');
                const result = await response.json();
                console.log(result);
                setServerUp(result.up);
                setPlayerCount(result.players);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchStatus();
    }, []);

    const startServer = async () => {
        try {
            const response = await fetch('/api/start', {
                method: "POST",
            });
            const result = await response.text();
            console.log(result);
            setIsStarting(true);
            setIsStopping(false);
            alert("Server is being started. Please give it some time to take effect.");
        } catch (error) {
            console.error('Error starting server:', error);
            alert("Error starting server");
        }
    }

    const stopServer = async () => {
        try {
            const response = await fetch('/api/stop', {
                method: "POST",
            });
            const result = await response.text();
            console.log(result);
            setIsStopping(true);
            setIsStarting(false);
            alert("Server is being stopped. Please give it some time to take effect.");
        } catch (error) {
            console.error('Error stopping server:', error);
            alert("Error stopping server");
        }
    }

    return (
        <main className="w-2/3 mx-auto mt-24">
            <h1 className="text-white text-3xl text-center">Manage Multiplayer Server</h1>
            <div className="mt-8 mb-16 border-white border-4 bg-black w-5/8 mx-auto">
                <MinecraftServerListItem name="The Minecraft Server" address="minecraft.connellboyce.com" up={serverUp} playerCount={playerCount} loading={isLoading} />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <ScriptableMinecraftButton text={serverUp ? "Shut Down" : "Start Up"} onClick={serverUp ? stopServer : startServer} disabled={isLoading} />
                <ScriptableMinecraftButton text="Refresh" onClick={()=> {location.reload()}} disabled={isLoading} />
                <MinecraftButton text="Back" href="/" />
            </div>

        </main>
    );
}