import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-rubik" dir="rtl">
      <Header />

      <main className="flex-1">

        {/* Section 1 — הסיפור שלנו */}
        <section className="bg-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6">הסיפור שלנו</h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              עתיד החשבונאות נולדה מתוך חזון של חברת האם — אין סוף פיננסים בע"מ — אחת מקבוצות הניהול הפיננסי המובילות בישראל.
              אחרי אלפי לקוחות מרוצים וניסיון של מעל 20 שנה בקרב אנשי המקצוע שלנו, הבנו שיש עוד שירות שהעסקים בישראל זקוקים לו:
              הנהלת חשבונות מקצועית, אישית ומדויקת.
            </p>
          </div>
        </section>

        {/* Section 2 — מי אנחנו (Stats) */}
        <section className="bg-[#F0F9FF] py-16 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="text-4xl font-bold text-[#0EA5E9] mb-2">אלפי+</div>
              <div className="text-lg text-[#1E3A5F] font-semibold">לקוחות מרוצים</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="text-4xl font-bold text-[#0EA5E9] mb-2">20+</div>
              <div className="text-lg text-[#1E3A5F] font-semibold">שנות ניסיון</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="text-4xl font-bold text-[#0EA5E9] mb-2">98%</div>
              <div className="text-lg text-[#1E3A5F] font-semibold">שביעות רצון</div>
            </div>
          </div>
        </section>

        {/* Section 3 — המנכ"ל שלנו */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] text-center mb-12">המנכ"ל שלנו</h2>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <img
                  src="/eldar-team.jpg"
                  alt="אלדר דיין — מנכ&quot;ל עתיד החשבונאות"
                  className="rounded-2xl max-w-md mx-auto shadow-lg w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <h3 className="text-2xl font-bold text-[#0EA5E9] mb-1">אלדר דיין</h3>
                <p className="text-[#1E3A5F] font-semibold mb-4">מנכ"ל עתיד החשבונאות</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  אלדר דיין נבחר בקפידה לעמוד בראש עתיד החשבונאות. עם רקע עשיר בעולם הפיננסי ותשוקה אמיתית לעזור לעסקים לצמוח —
                  הוא מביא גישה אישית, מקצועית ואכפתית לכל לקוח. עבור אלדר, הנהלת חשבונות היא לא רק מספרים —
                  היא הבסיס שעליו בונים עסק חזק.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — מה מייחד אותנו */}
        <section className="bg-[#1E3A5F] py-20 px-6 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">למה אנחנו שונים?</h2>
            <p className="text-lg md:text-xl leading-relaxed text-sky-100">
              אנחנו לא עוד משרד הנהלת חשבונות. אנחנו שותפים אמיתיים לדרך.
              כשאתה מצליח — אנחנו מצליחים. כשיש לחץ בסוף חודש — אנחנו כאן.
              זה לא סלוגן. זו ההתחייבות שלנו לכל לקוח, מהיום הראשון ועד האחרון.
            </p>
          </div>
        </section>

        {/* Section 5 — CTA */}
        <section className="bg-white py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">רוצה להצטרף למשפחה?</h2>
            <Link
              to="/contact"
              className="inline-block bg-[#0EA5E9] hover:bg-[#0284c7] text-white font-bold text-lg px-10 py-4 rounded-full transition-colors duration-200 shadow-md"
            >
              צור קשר עכשיו
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
