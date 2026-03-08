import { Link } from 'react-router-dom'

const values = [
  {
    icon: '🎯',
    title: 'דיוק',
    desc: 'כל נתון, כל דוח וכל הגשה עוברים בדיקה קפדנית. אצלנו אין "בערך" — יש דיוק מוחלט.',
  },
  {
    icon: '🤝',
    title: 'אמינות',
    desc: 'לקוחות עובדים איתנו שנים ארוכות כי הם יודעים שאנחנו עומדים מאחורי כל מה שאנחנו אומרים.',
  },
  {
    icon: '📱',
    title: 'זמינות',
    desc: 'שאלה דחופה? מסמך שצריך עכשיו? אנחנו זמינים — בטלפון, בווצאפ ובמייל — ולא נעלים בדיוק כשצריך אותנו.',
  },
  {
    icon: '🏆',
    title: 'מקצועיות',
    desc: 'הצוות שלנו מוסמך, מעודכן ומחובר לכל שינוי בחוקי המס. אתם מקבלים את הידע הטוב ביותר שיש.',
  },
]

const team = [
  {
    name: 'ד"ר רונן ברק',
    role: 'מייסד ומנהל',
    bio: 'רואה חשבון מוסמך עם תואר שני בחשבונאות מאוניברסיטת תל אביב. מעל 15 שנות ניסיון בייעוץ פיננסי לעסקים קטנים ובינוניים.',
    initials: 'רב',
  },
  {
    name: 'מיה אשכנזי',
    role: 'מנהלת חשבונות בכירה',
    bio: 'מנהלת חשבונות מוסמכת עם 10 שנות ניסיון. מתמחה בניהול שכר, דוחות מע"מ ותיקי עסקים קטנים.',
    initials: 'מא',
  },
  {
    name: 'גיל ממן',
    role: 'יועץ מס ותכנון מיסוי',
    bio: 'מומחה למיסוי עסקי ובינלאומי. עבד בעבר במשרד ראיית חשבון גדול ומביא ניסיון ותובנות שמחזירות ללקוחות כסף.',
    initials: 'גמ',
  },
]

export default function About() {
  return (
    <div dir="rtl">
      {/* Page Header */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: '#1E3A5F' }}>
            קצת עלינו
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            הסיפור מאחורי עתיד החשבונאות — מי אנחנו, למה התחלנו ולמה אנחנו עושים את זה
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: '#1E3A5F' }}>
                הסיפור שלנו
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  עתיד החשבונאות נוסדה מתוך אמונה שכל עסק קטן ובינוני ראוי לשירות חשבונאי מקצועי — לא רק חברות גדולות עם כיסים עמוקים.
                </p>
                <p>
                  ראינו שוב ושוב בעלי עסקים שטבעו בנייר, לחצו מרשות המסים, שילמו קנסות מיותרים — כי לא היה להם חשב שמבין אותם באמת.
                </p>
                <p>
                  הקמנו את עתיד החשבונאות כדי לשנות את זה. אנחנו לא עוד משרד שמייצר דוחות — אנחנו שותפים לדרך. מכירים כל עסק לעומק, מבינים את האתגרים שלו ועוזרים לו לצמוח.
                </p>
                <p className="font-semibold" style={{ color: '#1E3A5F' }}>
                  מעל 200 לקוחות. מעל 10 שנים. ו-98% שביעות רצון — לא מספרים בשבילנו, לקוחות אמרו את זה.
                </p>
              </div>
            </div>
            <div
              className="rounded-3xl p-10 flex flex-col items-center justify-center text-center"
              style={{ backgroundColor: '#F0F9FF', border: '2px solid #BAE6FD' }}
            >
              <div className="text-6xl mb-4">📈</div>
              <p className="text-5xl font-extrabold mb-2" style={{ color: '#0EA5E9' }}>2013</p>
              <p className="text-lg font-semibold" style={{ color: '#1E3A5F' }}>שנת הייסוד</p>
              <p className="text-slate-500 text-sm mt-2">יותר מ-10 שנות ניסיון בשירות עסקים ישראלים</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#1E3A5F' }}>
              הערכים שלנו
            </h2>
            <p className="text-slate-600 text-lg">אלה העקרונות שמנחים אותנו בכל יום</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-all border border-slate-100"
              >
                <div
                  className="text-4xl w-16 h-16 flex items-center justify-center rounded-2xl mx-auto mb-4"
                  style={{ backgroundColor: '#E0F2FE' }}
                >
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A5F' }}>
                  {v.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#1E3A5F' }}>
              הצוות שלנו
            </h2>
            <p className="text-slate-600 text-lg">האנשים שמאחורי השירות</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-100 p-7 text-center hover:shadow-lg transition-all"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
                  style={{ backgroundColor: '#0EA5E9' }}
                >
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#1E3A5F' }}>
                  {member.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#0EA5E9' }}>
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{ backgroundColor: '#1E3A5F' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">בואו נכיר</h2>
          <p className="text-slate-300 mb-8 text-lg">
            שיחה קצרה וחינמית — ונראה יחד איך נוכל לעזור לעסק שלכם.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 rounded-full font-bold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: '#0EA5E9', color: 'white' }}
          >
            צרו קשר עכשיו
          </Link>
        </div>
      </section>
    </div>
  )
}
