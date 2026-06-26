import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Courses', '/courses'],
  ['QBank', '/qbank'],
  ['Exam Simulator', '/exam-simulator'],
  ['AI Tutor', '/ai-tutor'],
  ['Shop', '/shop'],
  ['Pricing', '/pricing'],
];

export default function Nav(){
  return <nav className="brand-nav">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <img src="/nclex-excellence-logo.png" alt="NCLEX Excellence Academy logo" className="h-14 w-28 object-contain" />
      </Link>
      <div className="hidden items-center gap-8 text-sm font-black text-white lg:flex">
        {links.map(([label,href], index) => <Link key={href} href={href} className={index === 0 ? 'nav-active' : 'nav-link'}>{label}</Link>)}
      </div>
      <Link className="login-button" href="/login">Login</Link>
    </div>
  </nav>
}
