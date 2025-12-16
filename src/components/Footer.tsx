export function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
