import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Simple email regex for demo
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Submit logic here (e.g., API call)
    alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <label className="block mb-2 text-gray-700 font-medium" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label
          className="block mb-2 text-gray-700 font-medium"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded font-semibold hover:bg-indigo-700 transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}