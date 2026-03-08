import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-rubik" dir="rtl">
      <Header />

      <main className="flex-1">

        {/* הסיפור שלנו */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12">הסיפור שלנו</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text — right in RTL */}
              <div className="text-right order-1">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  עתיד החשבונאות נולדה מתוך חזון של חברת האם — <strong>אין סוף פיננסים בע"מ</strong> — אחת מקבוצות הניהול הפיננסי המובילות בישראל.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  אחרי אלפי לקוחות מרוצים וניסיון של מעל 20 שנה בקרב אנשי המקצוע שלנו, הבנו שיש עוד שירות שהעסקים בישראל זקוקים לו: הנהלת חשבונות מקצועית, אישית ומדויקת.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  אנחנו לא עוד משרד הנהלת חשבונות. אנחנו שותפים אמיתיים לדרך. כשאתה מצליח — אנחנו מצליחים. כשיש לחץ בסוף חודש — אנחנו כאן.
                </p>
              </div>
              {/* Photo — left in RTL */}
              <div className="flex justify-center order-2">
                <img
                  src="/eldar-team.jpg"
                  alt="צוות עתיד החשבונאות"
                  className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
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

        {/* הצוות שלנו */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] text-center mb-14">הצוות שלנו</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* אלדר דיין */}
              <div className="flex flex-col items-center text-center bg-[#F0F9FF] rounded-2xl p-8 shadow-md">
                <img
                  src="/eldar-team.jpg"
                  alt="אלדר דיין — מנכ״ל עתיד החשבונאות"
                  className="w-48 h-48 object-cover rounded-full shadow-lg mb-6 border-4 border-[#0EA5E9]"
                />
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-1">אלדר דיין</h3>
                <p className="text-[#0EA5E9] font-semibold mb-4">מנכ"ל החברה</p>
                <p className="text-gray-600 leading-relaxed">
                  אלדר מוביל את עתיד החשבונאות עם רקע עשיר בעולם הפיננסי ותשוקה אמיתית לעזור לעסקים לצמוח. גישה אישית, מקצועית ואכפתית לכל לקוח.
                </p>
              </div>

              {/* אפרת כובאני */}
              <div className="flex flex-col items-center text-center bg-[#F0F9FF] rounded-2xl p-8 shadow-md">
                <img
                  src="/efrat-team.jpg"
                  alt="אפרת כובאני — רואת חשבון"
                  className="w-48 h-48 object-cover rounded-full shadow-lg mb-6 border-4 border-[#0EA5E9]"
                />
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-1">אפרת כובאני</h3>
                <p className="text-[#0EA5E9] font-semibold mb-4">רואת חשבון</p>
                <p className="text-gray-600 leading-relaxed">
                  אפרת מביאה מקצועיות, דיוק ואמינות לכל תיק לקוח. מומחית בהנהלת חשבונות לעסקים קטנים ובינוניים עם ניסיון רב שנים בתחום.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* למה אנחנו שונים */}
        <section className="bg-[#1E3A5F] text-white py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">למה אנחנו שונים?</h2>
            <p className="text-lg leading-relaxed text-blue-100">
              אנחנו לא עוד משרד הנהלת חשבונות. אנחנו שותפים אמיתיים לצמיחה. כל לקוח מקבל ליווי אישי, מענה מהיר וייעוץ שיכול לחסוך לו אלפי שקלים בשנה.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">רוצה להצטרף למשפחה?</h2>
          <Link
            to="/contact"
            className="inline-block bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-4 px-10 rounded-full text-lg transition-colors duration-200"
          >
            צור קשר עכשיו
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}
