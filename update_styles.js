const fs = require('fs');

const cssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #07090D;
  --surface: #111722;
  --surface-bright: #18202D;
  --primary-gold: #C8A46B;
  --secondary-cyan: #7DE3FF;
  --text-primary: #F6F0E6;
  --text-muted: #8E9BB0;
  --radius: 8px;
}

body {
  background-color: var(--background);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.card {
  background-color: var(--surface);
  border: 1px solid var(--surface-bright);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(200, 164, 107, 0.1);
  border-color: rgba(200, 164, 107, 0.3);
}

.pill-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  background-color: var(--surface-bright);
  color: var(--text-primary);
  border: 1px solid transparent;
}

.pill-button:hover {
  background-color: rgba(200, 164, 107, 0.1);
  border-color: var(--primary-gold);
}

.pill-button.primary {
  background-color: var(--primary-gold);
  color: var(--background);
}

.pill-button.primary:hover {
  background-color: #E0C18E;
  box-shadow: 0 0 15px rgba(200, 164, 107, 0.4);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.eyebrow {
  color: var(--secondary-cyan);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.muted {
  color: var(--text-muted);
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0;
  border-bottom: 1px solid var(--surface-bright);
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .hero {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.hero h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.hero-copy {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.section {
  margin-bottom: 4rem;
}

.section-head {
  margin-bottom: 2rem;
}

.stat {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-gold);
}
`;

fs.writeFileSync('src/app/globals.css', cssContent);
console.log('Updated globals.css');
