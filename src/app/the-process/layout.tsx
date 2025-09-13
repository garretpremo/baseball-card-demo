import Image from "next/image";

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="prose prose-invert">
            { children }
        </div>
    );
}
