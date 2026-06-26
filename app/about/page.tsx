import Nav from '@/components/Nav';

export default function About(){
  return <><Nav/><main className="mx-auto max-w-5xl px-6 py-12">
    <span className="badge">About the Academy</span>
    <h1 className="mt-4 text-4xl font-black md:text-5xl">Built for serious NCLEX preparation.</h1>
    <p className="mt-5 text-lg text-slate-600">NCLEX Excellence Academy is an original exam-preparation platform designed to combine structured learning, realistic practice, performance analytics, coaching tools, and a medical product shop in one professional ecosystem.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {['Original QBank','Performance Tracking','Professional Management'].map((x)=><div className="card p-6" key={x}><h2 className="text-xl font-black">{x}</h2><p className="mt-2 text-slate-600">Designed to support students, instructors, and administrators as the academy grows.</p></div>)}
    </div>
  </main></>
}
