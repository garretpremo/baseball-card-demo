import { Player } from "@/models/player";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PlayerCardProps {
    player: Player;
    onClose: () => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, onClose }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const deltaX = e.clientX - centerX;
                const deltaY = e.clientY - centerY;

                const rotateY = (deltaX / centerX) * 10;
                const rotateX = -(deltaY / centerY) * 10;

                setRotation({ x: rotateX, y: rotateY });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
            onClick={onClose}
        >
            <div
                ref={cardRef}
                className="w-11/12 md:w-1/2 lg:w-1/3 bg-slate-800 rounded-2xl shadow-2xl p-6 transform transition-transform duration-100 ease-out"
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col items-center">
                    <Image
                        width={400}
                        height={400}
                        src={player.image_url}
                        alt={player.name}
                        className="w-48 h-48 rounded-full border-4 border-yellow-400 mb-4 shadow-lg"
                    />
                    <h2 className="text-3xl font-bold text-white text-center mb-2">{player.name}</h2>
                    <p className="text-lg text-gray-300 font-semibold mb-4">{player.position} • {player.team}</p>

                    <div className="w-full grid grid-cols-2 gap-4 text-white">
                        <div className="flex flex-col items-center bg-slate-700 rounded-xl p-4 shadow-inner transform transition-transform hover:scale-105 duration-200">
                            <span className="text-2xl font-bold text-yellow-400">{player.stats.batting_average}</span>
                            <span className="text-sm text-gray-400">Batting Average</span>
                        </div>
                        <div className="flex flex-col items-center bg-slate-700 rounded-xl p-4 shadow-inner transform transition-transform hover:scale-105 duration-200">
                            <span className="text-2xl font-bold text-yellow-400">{player.stats.home_runs}</span>
                            <span className="text-sm text-gray-400">Home Runs</span>
                        </div>
                        <div className="flex flex-col items-center bg-slate-700 rounded-xl p-4 shadow-inner transform transition-transform hover:scale-105 duration-200">
                            <span className="text-2xl font-bold text-yellow-400">{player.stats.RBIs}</span>
                            <span className="text-sm text-gray-400">RBIs</span>
                        </div>
                        <div className="flex flex-col items-center bg-slate-700 rounded-xl p-4 shadow-inner transform transition-transform hover:scale-105 duration-200">
                            <span className="text-2xl font-bold text-yellow-400">{player.stats.slugging}</span>
                            <span className="text-sm text-gray-400">Slugging</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};