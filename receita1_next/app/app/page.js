export default function Home() {
    return (
        <div>
            <div>Menu principal</div>
            <div>
                <h1>Viva Santana!</h1>
            </div>
            <About />
            <Contact />
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>Sobre Nós</h1>
            <p>Bem-vindo à página de Sobre Nós!</p>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>Contato</h1>
            <p>Entre em contato conosco pelo e-mail contato@exemplo.com</p>
        </div>
    );
}


