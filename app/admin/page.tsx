import Nav from '@/components/Nav';
import Link from 'next/link';

const tools = [
  ['Student Management','/admin/students','Review student profiles, readiness, progress, and membership status.'],
  ['Question Builder','/admin/questions','Create NCLEX, NGN, SATA, bow-tie, matrix, and case-study questions.'],
  ['Shop Management','/admin/shop','Manage products, inventory, orders, and digital downloads.'],
  ['Course Builder','#','Create lessons, upload videos, attach PDF notes, and publish modules.'],
  ['Exam Builder','#','Create readiness exams, timed exams, and topic-based quizzes.'],
  ['Analytics','#','Track revenue, engagement, readiness, weak areas, and course completion.'],
  ['Payments & Coupons','#','Manage plans, subscriptions, coupons, and billing records.'],
  ['Team Leaders','#','Assign team leaders, review cohorts, and manage permissions.'],
  ['Announcements','#','Send student updates, reminders, and academy news.'],
];

export default function Admin(){
  return <><Nav/><main className="mx-auto max-w-7xl px-6 py-10">
    <span className="badge">Control Center</span>
    <h1 className="mt-4 text-4xl font-black md:text-5xl">Admin Management</h1>
    <p className="mt-3 max-w-3xl text-slate-600">Operate NCLEX Excellence Academy from one dashboard: students, instructors, QBank, courses, exam simulator, shop, payments, reports, and communications.</p>
    <div className="mt-8 grid gap-5 md:grid-cols-3">{tools.map(([title,href,text])=><Link href={href} className="card p-6 transition hover:-translate-y-1 hover:shadow-xl" key={title}><h2 className="text-xl font-black">{title}</h2><p className="mt-2 text-slate-600">{text}</p></Link>)}</div>
  </main></>
}
