import Nav from '@/components/Nav';
import Link from 'next/link';

const pillars = [
  { title: 'Learn', text: 'Structured RN and PN content with focused lessons, cheat sheets, and review guides.' },
  { title: 'Practice', text: 'High-quality QBank questions with NGN formats, rationales, and topic filters.' },
  { title: 'Simulate', text: 'Timed readiness exams, CAT-style practice, and performance reports.' },
  { title: 'Shop', text: 'Medical and nursing products for students, clinical practice, and exam preparation.' },
];

export default function Home(){
  return <>
    <Nav/>
    <main className="mx-auto max-w-7xl px-6 py-12">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="badge">NCLEX Success Ecosystem</span>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-6xl">Pass the NCLEX with confidence, structure, and strategy.</h1>
          <p className="mt-5 text-lg text-slate-600">An original NCLEX preparation platform combining QBank, NGN case studies, coaching, analytics, readiness exams, student management, and a medical product shop.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/qbank" className="btn btn-primary">Start Practice</Link>
            <Link href="/courses" className="btn btn-green">Explore Courses</Link>
            <Link href="/shop" className="btn">Visit Shop</Link>
          </div>
        </div>
        <div className="card p-7">
          <h2 className="text-2xl font-black">Today's NCLEX Focus</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-blue-50 p-4"><b>Priority:</b> Airway, breathing, circulation, safety.</div>
            <div className="rounded-2xl bg-green-50 p-4"><b>NGN Skill:</b> Recognize cues - Analyze cues - Prioritize hypotheses.</div>
            <div className="rounded-2xl bg-yellow-50 p-4"><b>Readiness Goal:</b> Build accuracy, timing, and confidence before exam day.</div>
          </div>
        </div>
      </section>
      <section className="mt-16 grid gap-5 md:grid-cols-4">{pillars.map(x=><div className="card p-6" key={x.title}><h3 className="text-xl font-black">{x.title}</h3><p className="mt-2 text-slate-600">{x.text}</p></div>)}</section>
    </main>
  </>
}
