export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4">
      <h1 className="text-5xl font-bold mb-6 text-center">✨ Welcome to Starscription ✨</h1>
      <p className="text-lg mb-8 max-w-xl text-center">
        Get your daily dose of sarcastic stardust and funny horoscopes. Subscribe below and let the stars roast you lovingly.
      </p>

      <form
        action="https://formspree.io/f/mjkoopel"
        method="POST"
        className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
        <button
          type="submit"
          className="w-full bg-pu
