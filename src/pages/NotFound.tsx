import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold gradient-text-gold">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">Página não encontrada</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full gradient-gold text-primary-foreground font-semibold"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
