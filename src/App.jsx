import './App.css'

const profile = {
  name: 'Tehreem Ijaz',
  initials: 'TI',
  title: 'Computer Science Graduate',
  description:
    'Computer Science graduate from UET Taxila with experience in software development, machine learning and web technologies. I built a privacy-focused AI mobile app and a full-stack AI agent.',
  email: 'tehreemijaz14@gmail.com',
  location: 'Pakistan',
  github: 'https://github.com/Tehreemijazz',
  linkedin: 'https://www.linkedin.com/in/tehreem-ijaz-2b82b0310/',
  available: true,
}

const education = [
  { id: 1, degree: 'BS Computer Science', school: 'University of Engineering and Technology, Taxila', years: '2022 – 2026' },
  { id: 2, degree: 'Intermediate', school: 'Punjab Group of Colleges', years: '2020 – 2022' },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git & GitHub', 'Responsive Design']

const projects = [
  {
    id: 1,
    name: 'Personal AI Automation Agent',
    text: 'A personal AI agent with memory, profile understanding, conversation management and tool calling. It extracts and retrieves memories to personalize its responses.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Gemini'],
    link: 'https://personal-ai-agent-one.vercel.app/',
  },
  {
    id: 2,
    name: 'SafeStream',
    text: 'Privacy-focused Flutter app that estimates a user\u2019s age group on-device and filters YouTube content to match. Caching cut API calls by about 70%.',
    tech: ['Flutter', 'Dart', 'TensorFlow Lite', 'ML Kit'],
    link: 'https://github.com/Tehreemijazz/SafeStream-AI-Powered-Age-Verification-and-YouTube-Content-Filtering',
  },
  {
    id: 3,
    name: 'AdminPro Dashboard',
    text: 'Responsive admin dashboard built with Bootstrap. Dashboard shows counts of total, active, pending and inactive users, progress indicators, a recent activity section, and an FAQ accordion.',
    tech: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Tehreemijazz/AdminPro-Bootstrap-Admin-Dashboard',
  },
]

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="page">
      <header className="profile">
        {profile.image ? (
          <img className="avatar" src={profile.image} alt={`Portrait of ${profile.name}`} />
        ) : (
          <div className="avatar avatar-initials" aria-label={`Initials of ${profile.name}`}>
            {profile.initials}
          </div>
        )}
        <div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.title}</p>
          {profile.available && <span className="badge">Open to opportunities</span>}
          <p className="bio">{profile.description}</p>

          {/* Contact information */}
          <ul className="contact">
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            {profile.phone && <li>{profile.phone}</li>}
            <li>{profile.location}</li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            {/* Optional: only shown when a LinkedIn URL exists */}
            {profile.linkedin && (
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            )}
          </ul>
        </div>
      </header>

      <main>
        <section>
          <h2>Education</h2>
          {education.map((item) => (
            <article className="row" key={item.id}>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </div>
              <span className="years">{item.years}</span>
            </article>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          <ul className="chips">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.id}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <p className="tech">{p.tech.join(', ')}</p>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
                ) : (
                  <span className="muted">Link coming soon</span>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>© {year} {profile.name}</footer>
    </div>
  )
}

export default App