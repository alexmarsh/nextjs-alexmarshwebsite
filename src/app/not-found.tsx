// Path: src/app/not-found.tsx

import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <main className="site-main">
            <section className="section">
                <div className="container">
                    <div className="narrow-content">
                        <h1>Page Not Found</h1>
                        <p>The page you are looking for does not exist.</p>
                        <Link href="/" className="button" prefetch={false}>Return Home</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
