export default function PageLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="mb-100">
            <div className="prose prose-invert">
                { children }
            </div>
        </div>
    );
}
