import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Viva Santana!</h1>
            <Link href="/novarota">Rota 1</Link> <br/><br/>
            <a href="/novarota">Rota 1, jeito antigo</a>
        </div>
    );
}


export function Saudacao() {
    return <div>Olá, seja bem-vindo!</div>;
}
  
export function Footer() {
    return <footer>Tô tentando aprender next</footer>;
}
  