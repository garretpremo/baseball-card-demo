import { Player } from "@/models/player";

export const mockPlayers: Player[] = [
    {
        id: 1,
        name: "Alex 'The Cannon' Rodriguez",
        team: "New York Yankees",
        position: "Third Baseman",
        image_url: "https://placehold.co/400x400/1e293b/f8fafc?text=Player+1",
        stats: {
            batting_average: 0.295,
            home_runs: 696,
            RBIs: 2086,
            slugging: 0.550,
            on_base_percentage: 0.380,
        },
    },
    {
        id: 2,
        name: "Ken 'The Kid' Griffey Jr.",
        team: "Seattle Mariners",
        position: "Center Fielder",
        image_url: "https://placehold.co/400x400/1e293b/f8fafc?text=Player+2",
        stats: {
            batting_average: 0.284,
            home_runs: 630,
            RBIs: 1836,
            slugging: 0.538,
            on_base_percentage: 0.370,
        },
    },
    {
        id: 3,
        name: "Derek 'The Captain' Jeter",
        team: "New York Yankees",
        position: "Shortstop",
        image_url: "https://placehold.co/400x400/1e293b/f8fafc?text=Player+3",
        stats: {
            batting_average: 0.310,
            home_runs: 260,
            RBIs: 1311,
            slugging: 0.440,
            on_base_percentage: 0.377,
        },
    },
    {
        id: 4,
        name: "Babe 'The Sultan of Swat' Ruth",
        team: "Boston Red Sox",
        position: "Pitcher / Outfielder",
        image_url: "https://placehold.co/400x400/1e293b/f8fafc?text=Player+4",
        stats: {
            batting_average: 0.342,
            home_runs: 714,
            RBIs: 2214,
            slugging: 0.690,
            on_base_percentage: 0.474,
        },
    },
];