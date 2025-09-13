import { PlayerStats } from "@/models/player-stats";

export interface Player {
    id: number;
    name: string;
    team: string;
    position: string;
    image_url: string;
    stats: PlayerStats;
}