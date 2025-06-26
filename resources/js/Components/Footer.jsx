export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-600">
        <p className="mb-2">
          © {new Date().getFullYear()} Long COVID Research Fund. All rights reserved.
        </p>
        <p>
          Built with ❤️ by patients, researchers, and supporters.
        </p>
      </div>
    </footer>
  );
}
