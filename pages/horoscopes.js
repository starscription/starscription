export default function Horoscopes() {
  const signs = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];

  const getFunnyHoroscope = (sign) => {
    return `Dear ${sign}, the stars suggest you avoid tacos today... unless they're free.`;
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🪐 Your Funny Horoscope</h1>
      <ul>
        {signs.map((sign) => (
          <li key={sign}>
            <strong>{sign}:</strong> {getFunnyHoroscope(sign)}
          </li>
        ))}
      </ul>
    </div>
  );
}
