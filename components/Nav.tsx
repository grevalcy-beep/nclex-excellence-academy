import Link from 'next/link';

const links = [
  ['Courses','/courses'],
  ['QBank','/qbank'],
  ['Exam Simulator','/exam-simulator'],
  ['AI Tutor','/ai-tutor'],
  ['Shop','/shop'],
  ['Dashboard','/dashboard'],
  ['Admin','/admin'],
  ['Pricing','/pricing'],
];

export default function Nav(){
  return <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link href="/" className="text-xl font-black text-[#0B4D8C]">NCLEX Excellence Academy</Link>
      <div className="hidden items-center gap-5 text-sm font-semibold text-slate-700 lg:flex">
        {links.map(([label,href]) => <Link key={href} href={href} className="hover:text-[#0B4D8C]">{label}</Link>)}
      </div>
      <Link className="btn btn-primary" href="/login">Login</Link>
    </div>
  </nav>
}
