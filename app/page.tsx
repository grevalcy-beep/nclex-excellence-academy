import Nav from '@/components/Nav';
import Link from 'next/link';

const pillars = [
  { title: 'Learn', text: 'Structured RN and PN content with clear lessons, review guides, and focused study plans.' },
  { title: 'Practice', text: 'NCLEX-style questions with NGN formats, rationales, and topic-based review.' },
  { title: 'Master', text: 'Clinical judgment training for prioritization, delegation, safety, and patient-centered care.' },
  { title: 'Succeed', text: 'Readiness tools and coaching support that help students move toward exam day with confidence.' },
];

const outcomes = [
  ['90-Day Pathway', 'A guided study rhythm for serious candidates.'],
  ['NGN Ready', 'Case studies, bow-tie thinking, and clinical judgment focus.'],
  ['Student Support', 'Enrollment, coaching, and accountability built into the experience.'],
];

export default function Home(){
  return <>
    <Nav/>
    <main>
      <section className="hero-shell">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <span className="badge badge-gold">Learn - Practice - Master - Succeed</span>
            <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">Your Pathway to NCLEX Success</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              NCLEX Excellence Academy helps future nurses prepare with structure, strategy, clinical judgment, and confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-gold">Enroll Now</Link>
              <Link href="/courses" className="btn btn-light">Explore Courses</Link>
              <Link href="/qbank" className="btn btn-outline-light">Practice QBank</Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {outcomes.map(([title,text])=><div className="hero-stat" key={title}><b>{title}</b><span>{text}</span></div>)}
            </div>
          </div>
          <div className="brand-card">
            <img src="/nclex-excellence-logo.png" alt="NCLEX Excellence Academy logo" className="w-full rounded-2xl border border-white/60 bg-white object-cover shadow-2xl" />
            <div className="mt-5 rounded-2xl bg-white/95 p-5 text-[#0A192F] shadow-xl">
              <h2 className="text-2xl font-black text-[#082f6f]">Professional NCLEX Preparation</h2>
              <p className="mt-2 text-slate-600">Courses, QBank practice, exam simulation, coaching pathways, and student support in one academy platform.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <span className="badge">NCLEX Success System</span>
          <h2 className="mt-4 text-4xl font-black text-[#082f6f] md:text-5xl">A clear path from preparation to confidence.</h2>
          <p className="mt-4 text-lg text-slate-600">The academy is designed for nursing graduates who need organization, strategy, and strong clinical judgment before exam day.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {pillars.map(x=><div className="card brand-feature p-6" key={x.title}><h3 className="text-2xl font-black text-[#082f6f]">{x.title}</h3><p className="mt-3 text-slate-600">{x.text}</p></div>)}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="badge badge-blue">Enrollment</span>
            <h2 className="mt-4 text-4xl font-black text-[#082f6f]">Start preparing with excellence today.</h2>
            <p className="mt-4 text-lg text-slate-600">Use the contact page for class dates, coaching options, pricing questions, and student support.</p>
            <Link href="/contact" className="btn btn-primary mt-7">Request Enrollment Information</Link>
          </div>
          <div className="contact-panel">
            <div><b>Email</b><span>info@nclexexcellenceacademy.com</span></div>
            <div><b>Programs</b><span>NCLEX-RN, NCLEX-PN, NGN readiness, final review</span></div>
            <div><b>Slogan</b><span>Learn. Practice. Master. Succeed.</span></div>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-black text-white">NCLEX Excellence Academy</p>
          <p className="mt-1 text-sm text-blue-100">Your Pathway to NCLEX Success</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-blue-100">
          <Link href="/about">About</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  </>
}
