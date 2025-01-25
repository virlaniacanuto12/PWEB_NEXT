export default function Rota1Layout({ children }) {
    return (
        <div>
            <header>
                <h2>Layout da Rota 1</h2>
            </header>
            <main>{children}</main>
            <footer>
                <p>Footer exclusivo da Rota 1</p>
            </footer>
        </div>
    );
}
