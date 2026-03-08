import { useState, type FormEvent } from 'react'

const contactInfo = [
  { icon: '📞', label: 'טלפון', value: '03-000-0000' },
  { icon: '✉️', label: 'אימייל', value: 'info@atid-hashvonaut.co.il' },
  { icon: '📍', label: 'כתובת', value: 'רחוב דיזנגוף 50, תל אביב' },
  { icon: '🕐', label: 'שעות פעילות', value: 'ראשון–חמישי | 09:00–18:00' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div dir="rtl">
      {/* Page Header */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: '#1E3A5F' }}>
            צור קשר
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            מלאו את הטופס ונחזור אליכם תוך 24 שעות — ללא עלות וללא התחייבות
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-2xl font-extrabold mb-3" style={{ color: '#1E3A5F' }}>
                    הודעתכם התקבלה!
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    תודה שפנית אלינו. נחזור אליכם בהקדם האפשרי — בדרך כלל תוך 24 שעות.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', businessType: '', message: '' }) }}
                    className="mt-8 px-6 py-2.5 rounded-full font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: '#0EA5E9' }}
                  >
                    שלח הודעה נוספת
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#1E3A5F' }}>
                    השאירו פרטים
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1E3A5F' }}>
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="ישראל ישראלי"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1E3A5F' }}>
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="050-000-0000"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 transition-all"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1E3A5F' }}>
                      אימייל *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 transition-all"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1E3A5F' }}>
                      סוג עסק *
                    </label>
                    <select
                      name="businessType"
                      required
                      value={form.businessType}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 transition-all bg-white"
                    >
                      <option value="">בחרו סוג עסק...</option>
                      <option value="osek-murshe">עוסק מורשה</option>
                      <option value="baam">חברה בע"מ</option>
                      <option value="amuta">עמותה</option>
                      <option value="other">אחר</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1E3A5F' }}>
                      במה נוכל לעזור?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="ספרו לנו על העסק שלכם ומה אתם מחפשים..."
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: '#0EA5E9' }}
                  >
                    {loading ? 'שולח...' : 'שלחו הודעה 📩'}
                  </button>
                  <p className="text-center text-slate-500 text-sm">
                    🔒 הפרטים שלכם מאובטחים ולא יועברו לצד שלישי
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div
              className="rounded-3xl p-8"
              style={{ backgroundColor: '#F0F9FF', border: '2px solid #BAE6FD' }}
            >
              <h3 className="text-xl font-extrabold mb-6" style={{ color: '#1E3A5F' }}>
                פרטי יצירת קשר
              </h3>
              <ul className="space-y-5">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-0.5">{item.label}</p>
                      <p className="font-medium" style={{ color: '#1E3A5F' }}>{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-3xl p-8 text-white"
              style={{ backgroundColor: '#1E3A5F' }}
            >
              <h3 className="text-xl font-extrabold mb-3">⏱️ נחזור אליכם</h3>
              <p className="text-slate-300 leading-relaxed">
                מתחייבים לחזור אליכם תוך <strong className="text-white">24 שעות</strong> בימי עבודה. לרוב — הרבה יותר מהר מזה.
              </p>
              <div className="mt-5 pt-5 border-t border-slate-600">
                <p className="text-slate-400 text-sm">
                  עדיף טלפון? צלצלו ישירות:
                </p>
                <a
                  href="tel:030000000"
                  className="text-2xl font-bold text-white hover:text-sky-300 transition-colors block mt-1"
                  dir="ltr"
                >
                  03-000-0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
