import Link from 'next/link';

const links = [
  ['Courses','/courses'],
  ['QBank','/qbank'],
  ['Exam Simulator','/exam-simulator'],
  ['Pricing','/pricing'],
  ['Contact','/contact'],
];

export default function Nav(){
  return <nav className="sticky top-0 z-50 border-b border-[#d8c076]/40 bg-white/95 shadow-sm backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-3">
      <Link href="/" className="flex items-center gap-3">
        <img src="/nclex-excellence-logo.png" alt="NCLEX Excellence Academy logo" className="h-14 w-20 rounded-md object-cover object-center shadow-sm" />
        <span className="hidden leading-tight sm:block">
          <span className="block text-lg font-black text-[#082f6f]">NCLEX Excellence</span>
          <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#b8860b]">Academy</span>
        </span>
      </Link>
      <div className="hidden items-center gap-5 text-sm font-semibold text-slate-700 lg:flex">
        {links.map(([label,href]) => <Link key={href} href={href} className="hover:text-[#0B4D8C]">{label}</Link>)}
      </div>
      <div className="flex items-center gap-3">
        <Link className="hidden text-sm font-bold text-slate-700 hover:text-[#0B4D8C] sm:inline-flex" href="/login">Login</Link>
        <Link className="btn btn-primary" href="/contact">Enroll Now</Link>
      </div>
    </div>
  </nav>
}
