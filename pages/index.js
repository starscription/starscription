export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>🌟 Welcome to Starscription! 🌟</h1>
      <p>Daily horoscopes with a humorous twist—straight from the stars to your screen.</p>
      <p>Pick your sign and see what nonsense the universe has planned for you today.</p>
      <a href="/horoscopes" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', background: 'black', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
        🔮 Read Your Horoscope
      </a>
      <div style={{ marginTop: '2rem' }}>
        <h2>Subscribe to the Cosmic Nonsense</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" style={{ display: 'inline-block', marginTop: '1rem' }}>
          <input type="email" name="email" placeholder="Enter your email" required style={{ padding: '0.5rem', marginRight: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ padding: '0.5rem 1rem', border: 'none', background: 'purple', color: 'white', borderRadius: '5px' }}>Subscribe</button>
        </form>
      </div>
    </div>
  );
}
