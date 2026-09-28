# Cloudflare guide — Jupeemoon Software Pvt Ltd

Host the website on **Cloudflare Pages**, register **jupeemoon.com**, and create **1 email** (`contact@jupeemoon.com`).

**Expected cost**

| Item | Cost |
|------|------|
| Domain `jupeemoon.com` | ~$10.50 / year (Cloudflare Registrar) |
| Website hosting (Pages) | Free |
| SSL / CDN / DNS | Free |
| 1 email (Email Routing) | Free |
| **Year 1 total** | **~$10–11** |

---

## Before you start

- [ ] GitHub account
- [ ] Cloudflare account ([dash.cloudflare.com](https://dash.cloudflare.com) — sign up free)
- [ ] Payment card (for domain only)
- [ ] Personal Gmail/Outlook (to receive company email)
- [ ] This project built with Vite (`npm run build` → output `dist`)

---

## Part A — Push code to GitHub

1. Create a new GitHub repo (e.g. `jupeemoon`).
2. From the project folder, run:

```bash
git init
git add .
git commit -m "Initial Jupeemoon website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jupeemoon.git
git push -u origin main
```

3. Confirm the repo is public or that Cloudflare can access it (private repos need Cloudflare GitHub permission).

---

## Part B — Register `jupeemoon.com` on Cloudflare

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Go to **Domain registration** → **Register domains**  
   (or open [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)).
3. Search: `jupeemoon.com`.
4. If **Available**, add to cart.
5. Checkout (~**$10.50 USD**/year — at-cost pricing, renewal same).
6. Use registrant details for **Jupeemoon Software Pvt Ltd** (or your legal contact).
7. Complete payment.
8. Domain appears in your Cloudflare account with Cloudflare nameservers already set.

> If the domain is taken, try `jupeemoon.in` or contact the current owner. Re-check availability before paying.

---

## Part C — Deploy website on Cloudflare Pages

1. In Cloudflare Dashboard → **Workers & Pages**.
2. Click **Create** → **Pages** → **Connect to Git**.
3. Authorize GitHub and select the `jupeemoon` repo.
4. Build settings:

| Setting | Value |
|---------|--------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (default) |
| Node version | 18 or 20 (if asked) |

5. Click **Save and Deploy**.
6. Wait for the build. You’ll get a URL like:  
   `https://jupeemoon.pages.dev`

7. Open that URL and confirm the site loads.

### Redeploy later

- Every push to `main` auto-deploys.
- Or use **Retry deployment** in the Pages project.

---

## Part D — Attach custom domain

1. Open your Pages project → **Custom domains**.
2. Click **Set up a custom domain**.
3. Enter `jupeemoon.com`.
4. Also add `www.jupeemoon.com` (recommended).
5. Cloudflare will create the DNS records automatically if the domain is on Cloudflare.
6. Wait for SSL (**Active** status) — often a few minutes, sometimes up to an hour.
7. Visit:
   - `https://jupeemoon.com`
   - `https://www.jupeemoon.com`

### Optional — force HTTPS / www redirect

- In the domain’s DNS / Pages settings, enable HTTPS redirect.
- Choose whether apex (`jupeemoon.com`) or `www` is primary and redirect the other.

---

## Part E — Create 1 email: `contact@jupeemoon.com`

Uses **Cloudflare Email Routing** (free). Mail is forwarded to your personal inbox.

1. Cloudflare Dashboard → select domain **jupeemoon.com**.
2. Go to **Email** → **Email Routing**.
3. Click **Get started** / **Enable Email Routing**.
4. Cloudflare adds required MX / TXT DNS records (accept them).
5. **Destination addresses**:
   - Add your personal Gmail (e.g. `you@gmail.com`).
   - Confirm via the verification email Cloudflare sends.
6. **Custom addresses** → **Create address**:
   - Address: `contact`
   - Action: Send to → your verified Gmail
7. Save.

### Test

- Send a test mail **to** `contact@jupeemoon.com` from another account.
- It should arrive in your Gmail.

### Sending as `contact@jupeemoon.com` (optional)

Cloudflare Email Routing **receives/forwards** only. To **send** as the company address from Gmail:

1. Gmail → **Settings** → **See all settings** → **Accounts and Import**.
2. **Send mail as** → **Add another email address**.
3. Follow Gmail’s verification steps.

> If Gmail requires SMTP and you don’t have it yet, you can still receive on `contact@…` and reply from personal Gmail until you add Google Workspace or another SMTP later.

---

## Part F — Update the website for company details

After the domain and email work, update the site (footer / contact) to:

- Company: **Jupeemoon Software Pvt Ltd**
- Email: **contact@jupeemoon.com**
- Site: **https://jupeemoon.com**

Then commit and push so Pages redeploys.

---

## Checklist summary

| Step | Done? |
|------|-------|
| Push code to GitHub | ☐ |
| Register `jupeemoon.com` on Cloudflare (~$10.50/yr) | ☐ |
| Deploy Cloudflare Pages (`npm run build` → `dist`) | ☐ |
| Add custom domain + SSL | ☐ |
| Enable Email Routing | ☐ |
| Create `contact@jupeemoon.com` → personal Gmail | ☐ |
| Test site + email | ☐ |
| Update site text to Pvt Ltd + new email | ☐ |

---

## Cost reminder

- **Monthly hosting + email:** $0  
- **Yearly:** domain only ≈ **$10.50**  
- **Google Workspace:** not required for this plan  

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Pages build fails | Check build log; ensure `npm run build` works locally; set Node 18+ |
| Domain not connecting | Wait for DNS; confirm domain is in same Cloudflare account as Pages |
| SSL pending | Wait up to 24h; ensure no conflicting DNS at another registrar |
| Email not arriving | Confirm Email Routing enabled, destination verified, MX records present |
| Site shows old version | Hard refresh; check latest Pages deployment succeeded |

---

## Useful links

- [Cloudflare Dashboard](https://dash.cloudflare.com)
- [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
- [Email Routing docs](https://developers.cloudflare.com/email-routing/)
- [Registrar (domains)](https://www.cloudflare.com/products/registrar/)

---

*Jupeemoon Software Pvt Ltd — Cloudflare hosting & domain setup guide*
