import { Link } from 'react-router-dom'

const stats = [
  { value: '200+', label: 'לקוחות מרוצים' },
  { value: '10+', label: 'שנות ניסיון' },
  { value: '98%', label: 'שביעות רצון' },
]

const servicesPreview = [
  {
    icon: '📒',
    title: 'הנהח"ש שוטפת',
    desc: 'ניהול ספרי חשבונות שוטפים, הזנת חשבוניות, התאמות בנק וסיכומי חודשיים — הכל מטופל.',
  },
  {
    icon: '📊',
    title: 'דוחות כספיים',
    desc: 'הכנת דוחות רווח והפסד, מאזן, תזרים מזומנים ודוחות שנתיים לרשויות.',
  },
  {
    icon: '💡',
    title: 'ייעוץ מס',
    desc: 'תכנון מס חכם שחוסך לכם כסף תוך עמידה מלאה בדרישות רשות המסים.',
  },
]

const benefits = [
  {
    icon: '⚡',
    title: 'זמינות גבוהה',
    desc: 'תמיד נגישים לשאלות, לעדכונים ולייעוץ מהיר — בטלפון, בווצאפ ובמייל.',
  },
  {
    icon: '🎯',
    title: 'דיוק מוחלט',
    desc: 'לא נותנים מקום לטעויות. כל נתון מבוקר פעמיים לפני שמגיע לרשויות.',
  },
  {
    icon: '🤝',
    title: 'שירות אישי',
    desc: 'לא סתם ספרות. כל לקוח מקבל יחס אישי מחשב שמכיר את העסק שלו לעומק.',
  },
  {
    icon: '🛡️',
    title: 'עמידה בדדליינים',
    desc: 'הגשות ודוחות תמיד מוגשים בזמן — אף פעם לא בדקה ה-90.',
  },
]

const testimonials = [
  {
    name: 'שירה כהן',
    role: 'בעלת מסעדה, תל אביב',
    text: 'מאז שעברתי לעתיד החשבונאות אני ישנה טוב יותר בלילה. הם מטפלים בכל הנייר, ואני מתרכזת במסעדה. ממליצה בחום!',
    stars: 5,
  },
  {
    name: 'מיכאל לוי',
    role: 'מהנדס עצמאי, חיפה',
    text: 'ניסיתי שני חשבים לפני — אף אחד לא היה זמין כשהייתי צריך. כאן תמיד עונים ותמיד יש תשובה. שירות ברמה אחרת.',
    stars: 5,
  },
  {
    name: 'נועה שמש',
    role: 'חברת שיווק דיגיטלי, ירושלים',
    text: 'החסכנו אלפי שקלים בתכנון מס שלא ידענו שמגיע לנו. הצוות מקצועי, נעים ותמיד זמין. 10/10.',
    stars: 5,
  },
]

export default function Home() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 px-4"
        style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: '#BAE6FD', color: '#0369A1' }}
          >
            חשבונאות שמבינה עסקים 🏆
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ color: '#1E3A5F' }}
          >
            הנהלת חשבונות
            <br />
            <span style={{ color: '#0EA5E9' }}>שמבינה עסקים</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            אנחנו לא סתם מנהלים ספרים — אנחנו שותפים לצמיחה שלכם. מעסקים קטנים ועד חברות בינוניות, אנחנו מספקים שירות חשבונאי מדויק, מקצועי ואישי.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full font-bold text-white text-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: '#0EA5E9' }}
            >
              שיחת ייעוץ חינם
            </Link>
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-full font-bold text-lg border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: '#1E3A5F', color: '#1E3A5F', backgroundColor: 'white' }}
            >
              השירותים שלנו
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: '#1E3A5F' }} className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center text-white">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold" style={{ color: '#0EA5E9' }}>
                {s.value}
              </span>
              <span className="text-sm md:text-base text-slate-300 mt-1 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#1E3A5F' }}>
              מה אנחנו עושים
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              פתרונות חשבונאיים מקיפים שמאפשרים לכם להתמקד בעסק
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesPreview.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A5F' }}>
                  {s.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block px-8 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#0EA5E9' }}
            >
              לכל השירותים שלנו ←
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#1E3A5F' }}>
              למה לבחור בנו?
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              יותר מ-10 שנים אנחנו עוזרים לעסקים לצמוח — הנה הסיבות שלקוחות ממשיכים לעבוד איתנו
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50 transition-all"
              >
                <div
                  className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: '#E0F2FE' }}
                >
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#1E3A5F' }}>
                    {b.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#1E3A5F' }}>
              מה אומרים הלקוחות שלנו
            </h2>
            <p className="text-slate-600 text-lg">200+ עסקים כבר בחרו בנו — הנה מה שיש להם לומר</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-sm flex-grow mb-5">"{t.text}"</p>
                <div>
                  <p className="font-bold" style={{ color: '#1E3A5F' }}>{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20 px-4 text-center text-white"
        style={{ backgroundColor: '#1E3A5F' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">מוכן להתחיל?</h2>
          <p className="text-slate-300 text-lg mb-8">
            שיחת ייעוץ ראשונה — ללא עלות וללא התחייבות. תגלו איך נוכל לשפר את הניהול הכספי של העסק שלכם.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full font-bold text-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: '#0EA5E9', color: 'white' }}
          >
            דברו איתנו עכשיו 📞
          </Link>
        </div>
      </section>
    </div>
  )
}
