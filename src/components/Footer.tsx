import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#1E3A5F' }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#0EA5E9' }}>
              עתיד החשבונאות
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              שירות חשבונאי מקצועי לעסקים קטנים ובינוניים. אנחנו כאן כדי שתוכלו להתמקד במה שחשוב — לנהל את העסק שלכם.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-slate-100">ניווט מהיר</h4>
            <ul className="flex flex-col gap-2 text-slate-300 text-sm">
              <li><Link to="/" className="hover:text-sky-400 transition-colors">עמוד הבית</Link></li>
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">השירותים שלנו</Link></li>
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">קצת עלינו</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-slate-100">יצירת קשר</h4>
            <ul className="flex flex-col gap-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>050-966-2136</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>futurecount.il@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>זבוטינסקי 9, בני ברק — מגדל הכשרת היישוב</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>א׳–ה׳ | 09:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-8 pt-6 text-center text-slate-400 text-sm">
          <p>© {year} עתיד החשבונאות — כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  )
}
