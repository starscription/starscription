export default function Home() {
  return (
    <div>
      <h1>Welcome to Starscription</h1>
      <p>Get your daily horoscope with a twist.</p>
      <form action="https://formspree.io/f/mjkoopel" method="POST">
        <input type="email" name="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
