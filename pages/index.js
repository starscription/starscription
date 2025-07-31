import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>✨ Starscription ✨</h1>
      <p>Subscribe for just 50¢/month and get your daily dose of cosmic fun.</p>

      <form onSubmit={handleSubscribe} style={{ marginTop: '2rem' }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '0.5rem', width: '250px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Subscribe
        </button>
      </form>
    </div>
  );
}
