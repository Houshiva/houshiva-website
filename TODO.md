# TODO

## هاستینگ (GitHub Pages + Cloudflare)

دامنه `houshiva.ir` خریداری شد. هاستینگ روی **GitHub Pages** انتخاب شد:

- [x] ریپو public شد (پیش‌نیاز GitHub Pages روی پلن رایگان).
- [x] GitHub Pages فعال شد، با `.github/workflows/deploy.yml` به‌عنوان منبع build (نه یک برنچ جدا).
- [x] فایل `public/CNAME` با محتوای `houshiva.ir` اضافه شد و دامنه‌ی سفارشی توی تنظیمات Pages ست شد.
- [ ] **DNS در Cloudflare**: باید این رکوردها روی دامنه `houshiva.ir` ست بشن (پایین همین فایل، بخش «رکوردهای DNS» رو ببین).
- [ ] بعد از این‌که DNS درست propagate شد، گیت‌هاب خودش گواهی HTTPS رو صادر می‌کنه (چند دقیقه تا چند ساعت طول می‌کشه) — بعدش «Enforce HTTPS» توی Settings > Pages فعال بشه (الان چون دامنه هنوز verify نشده، خاموشه).
- [ ] **Secrets گیت‌هاب اکشن**: `PUBLIC_WEB3FORMS_ACCESS_KEY` و `BRSAPI_KEY` باید توی Settings > Secrets and variables > Actions این ریپو ست بشن (مقادیرشون همون‌هاییه که توی `.env` لوکاله) — بدون این‌ها، build توی GitHub Actions قیمت‌ها/فرم تماس رو نمی‌سازه.

### رکوردهای DNS (Cloudflare)

توی داشبورد Cloudflare، تب DNS دامنه `houshiva.ir`:

| نوع | نام | مقدار | Proxy status |
|---|---|---|---|
| A | @ | 185.199.108.153 | DNS only (ابری خاموش) |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| CNAME | www | houshiva.ir | DNS only |

نکته مهم: تا وقتی گیت‌هاب گواهی SSL رو صادر نکرده، پروکسی نارنجی Cloudflare («Proxied») باید **خاموش** (DNS only / ابری خاکستری) باشه، وگرنه verify دامنه توی گیت‌هاب fail می‌شه. بعد از این‌که سایت با HTTPS بالا اومد، می‌شه Proxy رو روشن کرد.

## Web3Forms (فرم تماس)

- [ ] توی پیش‌خوان Web3Forms (web3forms.com) آدرس فرم رو از `localhost` به `houshiva.ir` آپدیت کن. نیازی به access key جدید نیست.
- اگر پروژه جای دیگه‌ای clone بشه: فایل `.env` (که در `.gitignore` هست و push نمی‌شه) باید دستی ساخته بشه با:
  ```
  PUBLIC_WEB3FORMS_ACCESS_KEY=<access key از داشبورد web3forms.com>
  BRSAPI_KEY=<access key از داشبورد BrsApi.ir>
  ```

## قیمت‌ها (ابزارها > قیمت‌ها)

صفحه [src/pages/tools/prices.astro](src/pages/tools/prices.astro) قیمت طلا/سکه/ارز رو در زمان **build** از BrsApi.ir می‌گیره (بدون بک‌اند). یعنی قیمت‌ها فقط با یک build/deploy جدید آپدیت می‌شن، نه به‌صورت واقعاً لحظه‌ای.

- [x] `.github/workflows/deploy.yml` هم روی push به‌main دیپلوی می‌کنه، هم هر ۱۵ دقیقه در بازه‌ی ساعت ۱۱:۰۰ تا ۲۱:۰۰ (ساعت بازار) خودش build+deploy می‌کنه — نیازی به build hook جدا نیست.
- قیمت **خودرو** فعلاً منبع رایگان معتبری نداره؛ همیشه «به‌زودی» نشون داده می‌شه تا وقتی منبعی پیدا بشه.
