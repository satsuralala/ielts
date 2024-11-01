export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="mb-4">The page you looking for doesn exist.</p>
      <a
        href="/dashboard/overall"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Go back home
      </a>
    </div>
  );
}
