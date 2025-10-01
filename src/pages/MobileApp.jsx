import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Home</h1>
        <p className="text-gray-300 mb-6">Click the header "EV Drivers" → "Mobile App" to navigate, or use the menu on mobile.</p>
        <Link to="/mobile-app" className="px-4 py-2 bg-[#BDFE4E] text-black rounded-lg">
          Open Mobile App page
        </Link>
      </div>
    </div>
  );
}
