import Nav from '@/components/Nav';

const products = [
  { name: 'Nursing Clinical Starter Kit', price: '$49.99', tag: 'Student Essential', description: 'Basic tools for clinical practice and nursing school preparation.' },
  { name: 'Premium Stethoscope', price: '$79.99', tag: 'Best Seller', description: 'Reliable stethoscope option for assessment skills and clinical rotations.' },
  { name: 'NCLEX Study Flashcards', price: '$24.99', tag: 'Exam Prep', description: 'High-yield cards for pharmacology, safety, maternity, pediatrics, and med-surg.' },
  { name: 'Medical Badge Reference Set', price: '$14.99', tag: 'Quick Review', description: 'Compact clinical references for lab values, vitals, and common nursing formulas.' },
  { name: 'Nursing Planner', price: '$19.99', tag: 'Organization', description: 'Weekly study planner designed for NCLEX goals, practice scores, and exam countdown.' },
  { name: 'Scrub Cap & Accessories Bundle', price: '$29.99', tag: 'Clinical Gear', description: 'Practical accessories for nursing students and healthcare professionals.' },
];

export default function Shop(){
  return <>
    <Nav/>
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <span className="badge">Medical Shop</span>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Shop medical and nursing essentials.</h1>
          <p className="mt-4 text-slate-600">Sell study tools, clinical accessories, nursing supplies, digital products, and branded NCLEX Excellence Academy merchandise.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-black">Shop Management</h2>
          <p className="mt-2 text-slate-600">Admins can add products, update prices, manage inventory, publish digital downloads, and track orders.</p>
        </div>
      </section>
      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {products.map((p)=><div className="card p-6" key={p.name}>
          <div className="flex items-center justify-between gap-3"><span className="badge">{p.tag}</span><b className="text-[#0B4D8C]">{p.price}</b></div>
          <h2 className="mt-4 text-xl font-black">{p.name}</h2>
          <p className="mt-2 text-slate-600">{p.description}</p>
          <button className="btn btn-primary mt-5 w-full">Add to Cart</button>
        </div>)}
      </section>
    </main>
  </>
}
