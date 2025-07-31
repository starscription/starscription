export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      textAlign: 'center', 
      padding: '2rem', 
      maxWidth: '600px', 
      margin: '0 auto' 
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to Starscription ✨
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Get a daily dose of cosmic comedy with our zodiac horoscopes.  
        No star left unroasted.
      </p>

      <form 
        action="https://formspree.io/f/mjkoopel" 
        method="POST"
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email to subscribe" 
          required 
          style={{
            padding: '0.75rem',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <button 
          type="submit" 
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '0.75rem',
            fontSize: '1rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Subscribe Now
        </button>
      </form>

      <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#666' }}>
        Your future inbox is written in the stars 🌌
      </p>
    </div>
  );
}
