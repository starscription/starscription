import { useState } from 'react';

export default function Starscription() {
  const [email, setEmail] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [tone, setTone] = useState('funny');

  const handleStripeCheckout = async () => {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, zodiac, tone })
    });
    const session = await response.json();
    window.location.href = session.url;
  };

  return (
    <div style={{ minHeight: '100vh', padding: 20, background: 'linear-gradient(to bottom, #fff7d6, #e5d4ff)', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 10 }}>🌟 Welcome to Starscription 🌟</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 20 }}>
        Your stars have aligned... and they’re broke. Subscribe for just <strong>50¢/month</strong> and get horoscopes that are 98% jokes and 2% cosmic truth.
      </p>

      <form onSubmit={(e) => { e.preventDefault(); handleStripeCheckout(); }} style={{ maxWidth: 400, margin: '0 auto' }}>
        <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: 10, width: '100%', marginBottom: 10 }} />
        <input type="text" placeholder="Your zodiac sign" value={zodiac} onChange={(e) => setZodiac(e.target.value)} required style={{ padding: 10, width: '100%', marginBottom: 10 }} />
        <select value={tone} onChange={(e) => setTone(e.target.value)} style={{ padding: 10, width: '100%', marginBottom: 10 }}>
          <option value="funny">Funny & Roasty</option>
          <option value="mild">Mild & Motivational</option>
          <option value="serious">Serious & Insightful</option>
        </select>
        <button type="submit" style={{ padding: 10, width: '100%', backgroundColor: '#6a0dad', color: 'white', border: 'none' }}>
          Subscribe with Stripe
        </button>
      </form>

      <p style={{ fontSize: '0.8rem', marginTop: 40, color: '#666' }}>
        This is your sign. Laugh responsibly. Horoscopes may cause unexpected clarity or petty behavior.
      </p>
    </div>
  );
}
