import { Link } from 'react-router-dom'

const services = [
  {
    icon: '📒',
    title: 'הנהלת חשבונות שוטפת',
    desc: 'ניהול מלא של ספרי החשבונות השוטפים — הזנת חשבוניות קבלות וחשבוניות ספקים, התאמות בנקאיות, ריכוז ורישום כל הפעולות הכספיות מדי חודש. תמיד תדעו בדיוק איפה אתם עומדים.',
  },
  {
    icon: '📊',
    title: 'דוחות כספיים ומאזנים',
    desc: 'הכנה מקצועית של דוחות שנתיים: דוח רווח והפסד, מאזן בוחן, תזרים מזומנים ודוחות כספיים מבוקרים לצורך הגשה לרשות המסים, לבנקים ולמשקיעים.',
  },
  {
    icon: '👥',
    title: 'ניהול שכר והעסקה',
    desc: 'חישוב משכורות מדויק, הפקת תלושי שכר, ניכויים לביטוח לאומי ולמס הכנסה, ניהול קופות גמל ופנסיה, וטיפול בכל הדרישות הבירוקרטיות הקשורות להעסקת עובדים.',
  },
  {
    icon: '💡',
    title: 'ייעוץ מס ותכנון מיסוי',
    desc: 'תכנון מס חכם ומקדים שחוסך לכם אלפי שקלים בשנה. ניתוח מבנה העסק, בחירת מסלול המיסוי האופטימלי, ייעוץ לפני עסקאות גדולות וניצול מרבי של ההטבות המגיעות לכם בחוק.',
  },
  {
    icon: '🧾',
    title: 'דוחות מע"מ וביטוח לאומי',
    desc: 'הכנה והגשה שוטפת של דוחות מע"מ חודשיים ודו-חודשיים, טיפול בתיקוני דוחות, ניהול כל ההתכתבויות מול רשות המסים והביטוח הלאומי. אנחנו מנהלים — אתם שקטים.',
  },
  {
    icon: '🚀',
    title: 'ליווי פתיחת עסק',
    desc: 'פותחים עסק? ניצב לצדכם מהיום הראשון: פתיחת תיקים ברשות המסים ובביטוח לאומי, רישום במע"מ, הכוונה לגבי מבנה עסקי נכון (עוסק מורשה / חברה), וייעוץ ראשוני ללא עלות.',
  },
]

export default function Services() {
  return (
    <div dir="rtl">
      {/* Page Header */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: '#1E3A5F' }}>
            השירותים שלנו
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            פתרונות חשבונאיים מקיפים לכל שלב בחיי העסק שלכם — מפתיחה ועד צמיחה
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-100 p-7 flex flex-col hover:shadow-lg hover:border-sky-200 transition-all hover:-translate-y-1"
                style={{ backgroundColor: '#FAFCFE' }}
              >
                <div
                  className="text-4xl w-16 h-16 flex items-center justify-center rounded-2xl mb-5"
                  style={{ backgroundColor: '#E0F2FE' }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A5F' }}>
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">{service.desc}</p>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 font-semibold text-sm transition-colors hover:opacity-80"
                    style={{ color: '#0EA5E9' }}
                  >
                    לפרטים ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#1E3A5F' }}>
            לא בטוחים מה אתם צריכים?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            שיחת ייעוץ ראשונה ללא עלות. נבדוק ביחד מה הכי מתאים לעסק שלכם.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 rounded-full font-bold text-white text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: '#0EA5E9' }}
          >
            דברו איתנו עכשיו
          </Link>
        </div>
      </section>
    </div>
  )
}
