# TODO

## Web3Forms (contact form)

- [ ] وقتی دامنه خریداری شد: توی پیش‌خوان Web3Forms (web3forms.com) آدرس فرم رو از `localhost` به دامنه‌ی واقعی (`houshiva.ir`) آپدیت کن. نیازی به access key جدید نیست.
- اگر پروژه جای دیگه‌ای clone بشه: فایل `.env` (که در `.gitignore` هست و push نمی‌شه) باید دستی ساخته بشه با:
  ```
  PUBLIC_WEB3FORMS_ACCESS_KEY=<access key از داشبورد web3forms.com>
  BRSAPI_KEY=<access key از داشبورد BrsApi.ir>
  ```

## قیمت‌ها (ابزارها > قیمت‌ها)

صفحه [src/pages/tools/prices.astro](src/pages/tools/prices.astro) قیمت طلا/سکه/ارز رو در زمان **build** از BrsApi.ir می‌گیره (بدون بک‌اند). یعنی قیمت‌ها فقط با یک build/deploy جدید آپدیت می‌شن، نه به‌صورت واقعاً لحظه‌ای.

- [ ] وقتی هاستینگ سایت مشخص شد (Vercel/Netlify/...)، یک rebuild خودکار دوره‌ای (مثلاً هر ۱-۲ ساعت) وصل بشه — با یه GitHub Action روی cron که به build hook هاست ضربه بزنه.
- قیمت **خودرو** فعلاً منبع رایگان معتبری نداره؛ همیشه «به‌زودی» نشون داده می‌شه تا وقتی منبعی پیدا بشه.
