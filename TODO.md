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

- [x] یک GitHub Action (`.github/workflows/rebuild-prices.yml`) اضافه شد که هر ۱۵ دقیقه، در بازه‌ی ساعت ۱۱:۰۰ تا ۲۱:۰۰ (ساعت بازار)، به build hook هاست ضربه می‌زنه.
- [ ] وقتی هاستینگ سایت مشخص شد (Vercel/Netlify/...): آدرس build hook رو بگیر و به‌عنوان secret به اسم `DEPLOY_HOOK_URL` توی Settings > Secrets and variables > Actions این ریپو اضافه کن. تا اون موقع Action هر بار فقط یک پیام لاگ می‌ذاره و کاری نمی‌کنه.
- قیمت **خودرو** فعلاً منبع رایگان معتبری نداره؛ همیشه «به‌زودی» نشون داده می‌شه تا وقتی منبعی پیدا بشه.
