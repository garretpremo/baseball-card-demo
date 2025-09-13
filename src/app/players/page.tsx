// @ts-ignore

'use client'
import { Player } from "@/models/player";
import { PlayerCard } from "@/app/players/player-card";
import { useState } from "react";
import { mockPlayers } from "@/data/mock-players";

export default function Page() {
    const players = mockPlayers;
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

    if (selectedPlayer) {
        return <PlayerCard player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />;
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans p-4 sm:p-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 tracking-tight">
                    Baseball Stats
                </h1>
                <p className="text-lg text-slate-400 mt-2">Explore the legends of the game.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map((player) => (
                    <div
                        key={player.id}
                        onClick={() => setSelectedPlayer(player)}
                        className="group cursor-pointer bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                    >
                        <img
                            src={player.image_url}
                            alt={player.name}
                            className="w-24 h-24 rounded-full border-4 border-slate-700 transition-all duration-300 group-hover:border-yellow-400 group-hover:scale-110"
                        />
                        <h3 className="text-xl font-bold mt-4 text-white">{player.name}</h3>
                        <p className="text-sm text-slate-400">{player.team}</p>
                        <div className="mt-4 w-full grid grid-cols-3 gap-2 text-white">
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold text-yellow-400">{player.stats.home_runs}</span>
                                <span className="text-xs text-slate-400">HR</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold text-yellow-400">{player.stats.batting_average}</span>
                                <span className="text-xs text-slate-400">AVG</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold text-yellow-400">{player.stats.RBIs}</span>
                                <span className="text-xs text-slate-400">RBI</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}