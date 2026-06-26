import Nav from '@/components/Nav';
import Link from 'next/link';

const features = [
  ['Expert-Led Courses', 'Learn from experienced nursing educators.', '📖'],
  ['NCLEX Question Bank', 'Thousands of high-quality practice questions.', '☑'],
  ['Track Your Progress', 'Monitor your performance and improve daily.', '↗'],
  ['Achieve Your Goals', 'We are with you every step of the way.', '🏆'],
];

const stats = [
  ['10,000+', 'Students Helped', '👥'],
  ['High Quality', 'Trusted Content', '🛡'],
  ['95%', 'Pass Rate Improvement', '☆'],
  ['Accessible', 'Study Anywhere, Anytime', '◎'],
];

export default function Home(){
  return <>
    <Nav/>
    <main>
      <section className="model-hero">
        <div className="gold-swoop-left"></div>
        <div className="hero-curve"></div>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-14">
          <div className="hero-logo-panel">
            <img src="/nclex-excellence-logo.png" alt="NCLEX Excellence Academy logo" className="mx-auto w-full max-w-2xl" />
          </div>
          <div className="hero-message">
            <div className="copy-block">
              <h1>Prepare Today,<br/>Pass Tomorrow,<br/><span>Change Lives Forever.</span></h1>
              <p>High quality NCLEX review, practice questions, and success strategies to help you achieve your RN dreams.</p>
              <Link href="/contact" className="journey-button">Start Your Journey <span>→</span></Link>
            </div>
            <img src="/nurse-hero.png" alt="Professional smiling nurse" className="nurse-hero" />
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(([title,text,icon])=><article className="feature-item" key={title}>
            <div className="feature-icon">{icon}</div>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
              <span className="feature-mark"></span>
            </div>
          </article>)}
        </div>
      </section>

      <section className="stats-strip">
        <div className="mx-auto grid max-w-6xl gap-0 px-6 py-5 md:grid-cols-4">
          {stats.map(([value,label,icon])=><div className="stat-item" key={value}>
            <span>{icon}</span>
            <div><b>{value}</b><p>{label}</p></div>
          </div>)}
        </div>
      </section>

      <section className="why-section">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="section-kicker">Why Choose Us</p>
          <h2>Empowering Future Nurses</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">We provide the tools, knowledge and support you need to pass the NCLEX exam with confidence and become the nurse you were called to be.</p>
        </div>
      </section>
    </main>
    <footer className="premium-footer">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-9 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="footer-brand">
          <div className="footer-icon">🎓</div>
          <div>
            <h3>NCLEX Excellence Academy</h3>
            <p>Empowering future nurses with the tools, knowledge and support to pass the NCLEX exam and excel in their careers.</p>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link href="/courses">Courses</Link>
          <Link href="/qbank">QBank</Link>
          <Link href="/exam-simulator">Exam Simulator</Link>
          <Link href="/ai-tutor">AI Tutor</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div>
          <h4>Resources</h4>
          <Link href="/blog">Study Tips</Link>
          <Link href="/blog">NCLEX Blog</Link>
          <Link href="/about">Testimonials</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div>
          <h4>Stay Connected</h4>
          <p>Follow us for study tips, motivation and updates.</p>
          <div className="socials">
            <span>f</span><span>◎</span><span>▶</span><span>♪</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NCLEX Excellence Academy. All rights reserved.</span>
        <span>info@nclexexcellenceacademy.com</span>
        <span>www.nclexexcellenceacademy.com</span>
      </div>
    </footer>
  </>
}
