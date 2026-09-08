# गणपति बप्पा मोरया — Ganpati Invitation Website

A mobile-first, static Ganesh Chaturthi invitation website for the **Vaishya Family**
(BJP — Bappa Janta Party). No database, no backend, no login — just a beautiful
digital invitation card you can deploy anywhere that hosts static files.

---

## 1. Install

You need [Node.js](https://nodejs.org) 18+ installed. Then, inside this folder:

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) in your browser.
Resize your browser (or open dev tools device mode) to check phone widths
like 360px, 390px and 430px.

## 3. Build for production

```bash
npm run build
```

This creates a `dist/` folder containing the finished, static website —
this is what actually gets deployed.

To preview the production build locally:

```bash
npm run preview
```

---

## 4. Where to put your photos

Put your image files inside **`public/images/`**, using these exact names
(a `README.txt` with the same mapping also lives inside that folder):

| File | Used for |
|---|---|
| `image1.png` | Ganpati Mandal / Family logo |
| `image2.jpg` | Ms. Priya Kesarwani |
| `image3.jpg` | Mr. Harsh Vaishya |
| `image4.jpg` | Mr. Sanskar Vaishya |
| `image5.jpg` | Gallery photo 1 — landscape (~16:9) |
| `image6.jpg` | Gallery photo 2 — portrait (~3:4) |
| `image7.jpg` | Gallery photo 3 — portrait (~3:4) |
| `image8.jpg` | Gallery photo 4 — portrait (~3:4) |
| `image9.jpg` | Gallery photo 5 — portrait (~3:4) |
| `og-image.jpg` | WhatsApp/social link preview image (1200×630) |

Placeholder images for `image1.png` and `og-image.jpg` are already included
so the site looks complete even before you add real photos. `image2`–`image9`
are not included — until you add them, the site shows a soft decorative
placeholder instead of a broken image, so nothing ever looks broken.

**Just replace the file — do not rename it, do not edit any code.**

## 5. Where to put your background music

Put a single MP3 file at:

```
public/audio/background.mp3
```

The music button (bottom-right, floating) will use it automatically.
Keep the file under ~3–4 MB so the page stays fast on mobile data.
If you don't add a file, the music button simply does nothing when tapped —
it won't break the site.

### How the audio behaves (by design)

- Music **never autoplays** — it only starts after a visitor taps the button
  (browsers block autoplay-with-sound anyway, and it's less jarring for guests).
- If the visitor locks their phone, switches apps, or changes tabs, the music
  **pauses automatically**.
- It only resumes automatically if the visitor had it playing right before
  they left — it will never suddenly start playing on its own.

---

## 6. How to change text (names, wording, etc.)

Almost all editable content lives in **one file**:

```
src/data/content.js
```

Open it and change the Hindi/English strings, the mandal name, family name,
organizer names, gallery captions, or footer credit. You generally don't
need to touch any `.jsx` component file for text changes.

## 7. How to change the contact number

Also in `src/data/content.js`, edit the `contact` object:

```js
export const contact = {
  name: 'संस्कार वैश्य (Sanskar Vaishya)',
  phoneDisplay: '+91 87797 29929',   // what people SEE
  phoneTel: '+918779729929',         // used by the "Call" button — no spaces, with country code
  whatsappUrl: 'https://wa.me/918779729929', // WhatsApp number, no + or spaces
};
```

## 8. How to change the location

Edit the `location` object in `src/data/content.js`:

```js
export const location = {
  nameHi: 'चोखेलाल वैश्य निवास',
  nameEn: 'Chokhelal Vaishya Niwas',
  mapsUrl: '', // paste a Google Maps share link here to make the card tappable
};
```

If `mapsUrl` is left empty, the location is shown as plain, easy-to-read
text (no fake or guessed map link is ever created).

## 9. How to change the program / timeline dates

Edit the `timeline` array in `src/data/content.js`. Each day has a date and
a list of `events` (each with a title and a time); a day with no events
(like 15 September) automatically shows a soft "general darshan" note
instead of an empty card.

---

## 10. Configuring the WhatsApp / Open Graph preview

When you deploy the site, you'll get a real URL (e.g. `https://your-site.vercel.app`).
Update it in **`index.html`**, replacing every `https://YOUR-DOMAIN.com`:

```html
<meta property="og:image" content="https://YOUR-DOMAIN.com/images/og-image.jpg" />
<meta property="og:url" content="https://YOUR-DOMAIN.com/" />
<meta name="twitter:image" content="https://YOUR-DOMAIN.com/images/og-image.jpg" />
```

This must be an **absolute URL** (starting with `https://`) — WhatsApp can't
resolve a local file path. After deploying, you can test the preview at
[opengraph.xyz](https://www.opengraph.xyz/) or by pasting the link in a
WhatsApp chat to yourself.

---

## 11. Deploying

### Vercel
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Vite — just click **Deploy**.
4. Copy your live URL and update the Open Graph tags (step 10 above), then redeploy.

### Netlify
1. Push this folder to a GitHub repository (or drag-and-drop the `dist/`
   folder after running `npm run build` into Netlify's dashboard).
2. Build command: `npm run build` — Publish directory: `dist`.
3. Deploy, then update the Open Graph tags with your final URL and redeploy.

### GitHub Pages
1. Run `npm run build` to generate `dist/`.
2. Deploy the contents of `dist/` to the `gh-pages` branch (e.g. using the
   `gh-pages` npm package, or GitHub's "Deploy from a branch" setting).
3. Update the Open Graph tags with your `https://<username>.github.io/<repo>/` URL.

---

## 12. Project structure

```
├── index.html              # Page shell + SEO/Open Graph meta tags
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx               # Assembles all sections in order
│   ├── index.css              # Global styles, fonts, reduced-motion rules
│   ├── data/
│   │   └── content.js          # ALL editable text, dates, names, contact info
│   ├── hooks/
│   │   └── useBackgroundMusic.js  # Safe audio play/pause logic
│   └── components/
│       ├── Hero.jsx
│       ├── Invitation.jsx
│       ├── Organizers.jsx
│       ├── Timeline.jsx
│       ├── Location.jsx
│       ├── Gallery.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── MusicPlayer.jsx
│       ├── ImageWithFallback.jsx  # Never shows a broken image
│       └── Divider.jsx
└── public/
    ├── images/    # Your photos go here
    └── audio/     # Your background.mp3 goes here
```

---

## 13. Quality notes

- **No backend, no database, no API keys** — 100% static, safe to deploy anywhere.
- **Mobile-first**: designed and tested for 360–430px widths first, then
  scales up for tablets/desktop.
- **Accessible**: semantic headings, alt text on every image, visible
  keyboard focus states, large tap targets, and full support for
  `prefers-reduced-motion`.
- **Resilient**: missing images or missing audio never break the page.

🙏 गणपति बप्पा मोरया
