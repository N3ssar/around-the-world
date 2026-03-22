# 🗺️ خريطة طريق مشروع Around The World (To-Do List)

## 🟩 المرحلة الأولى: تجهيز طبقة البيانات (Services)
- [x] إنشاء ملف `src/services/api.ts`.
- [x] كتابة دالة `getAllCountries()` لجلب كل الدول.
- [ ] كتابة دالة `getCountryByCode(code: string)` لجلب دولة واحدة.

## 🟩 المرحلة الثانية: إعداد التوجيه (Routing)
- [ ] تسطيب مكتبة `react-router-dom`.
- [ ] تجهيز ملف `App.tsx` ووضع الـ Routes الأساسية:
  - [ ] راوت الرئيسية `/` مكون `<Home />`.
  - [ ] راوت التفاصيل `/country/:countryCode` مكون `<CountryDetails />`.
  - [ ] راوت الـ 404 `*` مكون `<NotFound />`.

## 🟩 المرحلة الثالثة: الصفحة الرئيسية (Home Page)
- [ ] إنشاء ملف `Home.tsx` وتجميع (Header, FilterBar, CountryList).
- [ ] جلب الداتا باستخدام `useEffect` وحفظها في `State`.
- [ ] برمجة الفلترة والبحث (Local Filtering).
- [ ] معالجة حالة الـ Empty State (لو البحث مش مطابق لأي دولة).

## 🟩 المرحلة الرابعة: صفحة التفاصيل (Country Details)
- [ ] إنشاء ملف `CountryDetails.tsx`.
- [ ] قراءة الكود من الـ URL باستخدام `useParams`.
- [ ] جلب داتا الدولة باستخدام الدالة المخصصة لذلك.
- [ ] معالجة الخطأ لو كود الدولة غير صحيح (إظهار زر الرجوع).

## 🟩 المرحلة الخامسة: صفحة الخطأ (Not Found)
- [ ] إنشاء مكون `NotFound.tsx`.
- [ ] تصميم صفحة 404 بسيطة مع زر العودة للرئيسية.