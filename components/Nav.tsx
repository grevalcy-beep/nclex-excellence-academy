import Link from 'next/link';

const links = [
  ['Home','/'],
  ['About Us','/about'],
  ['Courses','/courses'],
  ['Question Bank','/qbank'],
  ['Resources','/blog'],
  ['Contact','/contact'],
];

export default function Nav(){
  return <nav className="brand-nav">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <img src="/nclex-excellence-logo.png" alt="NCLEX Excellence Academy logo" className="h-14 w-24 object-contain" />
      </Link>
      <div className="hidden items-center gap-9 text-sm font-black uppercase tracking-wide text-white lg:flex">
        {links.map(([label,href], index) => <Link key={href} href={href} className={index === 0 ? 'nav-active' : 'hover:text-[#f4c24f]'}>{label}</Link>)}
      </div>
      <Link className="login-button" href="/login">Student Login</Link>
    </div>
  </nav>
}
