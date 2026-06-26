import Nav from '@/components/Nav';
import Link from 'next/link';

const features = [
  ['Expert-Led Courses', 'Learn from experienced nursing educators.'],
  ['NCLEX Question Bank', 'Thousands of high-quality practice questions.'],
  ['Track Your Progress', 'Monitor your performance and improve daily.'],
  ['Achieve Your Goals', 'We are with you every step of the way.'],
];

const why = [
  ['Focused Study Path', 'Organized courses, QBank practice, and readiness review built for NCLEX success.'],
  ['Clinical Judgment', 'Practice prioritization, safety, delegation, and NGN-style thinking.'],
  ['Student Support', 'Enrollment guidance, coaching options, and progress-centered preparation.'],
];

export default function Home(){
  return <>
    <Nav/>
    <main>
      <section className="model-hero">
        <div className="hero-curve"></div>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-14">
          <div className="hero-logo-panel">
            <img src="/nclex-excellence-logo.png" alt="NCLEX Excellence Academy logo" className="mx-auto w-full max-w-2xl" />
          </div>
          <div className="hero-message">
            <div className="copy-block">
              <h1>Prepare Today,<br/>Pass Tomorrow,<br/><span>Change Lives Forever.</span></h1>
              <p>High quality NCLEX review, practice questions and success strategies to help you achieve your RN dreams.</p>
              <Link href="/contact" className="journey-button">Start Your Journey <span>→</span></Link>
            </div>
            <img src="/nurse-hero.png" alt="Smiling nurse representing NCLEX success" className="nurse-hero" />
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(([title,text], index)=><article className="feature-item" key={title}>
            <div className="feature-icon">{['✦','✓','↗','🏆'][index]}</div>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>)}
        </div>
      </section>

      <section className="why-section">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="section-kicker">Why Choose Us</p>
          <h2>Empowering Future Nurses</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">We provide the tools, knowledge and support you need to pass the NCLEX exam with confidence and become the nurse you were called to be.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {why.map(([title,text])=><div className="card brand-feature p-6 text-left" key={title}><h3 className="text-xl font-black text-[#082f6f]">{title}</h3><p className="mt-3 text-slate-600">{text}</p></div>)}
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-black text-white">NCLEX Excellence Academy</p>
          <p className="mt-1 text-sm text-blue-100">Learn. Practice. Master. Succeed.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-blue-100">
          <Link href="/about">About Us</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/qbank">Question Bank</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  </>
}
