import '../../index.css';

export const Catalog = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-3xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page non trouvée
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Désolé, la page que vous chercher n'existe pas.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a href="/" className="text-lg font-semibold text-gray-900">
            Revenir à l'accueil <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
};
