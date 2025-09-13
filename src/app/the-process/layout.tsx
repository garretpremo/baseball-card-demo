import Image from "next/image";

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const styles: Record<string, string> = {
        '--tw-prose-headings': 'white'
    };
    return (
        <div className="align-center">
            <div className="prose" style={ styles }>
                { children }
            </div>
        </div>
    );
}
