# The Captain Howey Pub Website

A production-ready, mobile-first static website for **The Captain Howey**, a warm local UK pub. The site is designed for fast deployment on GitHub Pages or a Plesk VPS with no build tools, no framework and no external dependencies.

## Project description

This repository contains a polished single-page pub website with anchor navigation, responsive cards, accessible forms and a basic web app manifest for future PWA readiness. It is built with semantic HTML, CSS custom properties and a small JavaScript file for the mobile navigation experience.

The current content uses realistic pub copy and clearly marked placeholders for address, opening hours, phone number, email address, menu items and the Google Maps block.

## File structure

```text
.
├── index.html              # Main single-page website markup
├── styles.css              # Mobile-first responsive styling and design system tokens
├── script.js               # Mobile navigation toggle and dynamic footer year
├── manifest.webmanifest    # Basic PWA metadata and generated SVG icons
└── README.md               # Setup, deployment and future roadmap notes
```

## How to run locally

Because this is a static website, you can open `index.html` directly in a browser. For a more realistic local server, run one of the following from the repository root:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

If you use VS Code, the Live Server extension also works well.

## How to deploy on GitHub Pages

1. Commit and push these files to the `main` branch of the GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select:
   - Branch: `main`
   - Folder: `/ (root)`
6. Save the settings.
7. GitHub Pages will publish the site and provide a live URL once deployment finishes.

Before sharing the site publicly, update the placeholder booking email, phone number, address and map embed in `index.html`.

## How to upload to Plesk

1. Log in to your Plesk control panel.
2. Open the target domain or subdomain.
3. Go to **Files** or connect via FTP/SFTP.
4. Upload the following files to the web root, usually `httpdocs`:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `manifest.webmanifest`
5. Confirm that `index.html` is in the root of the site folder.
6. Visit the domain in a browser and hard refresh to check the latest files.

Optional Plesk checklist:

- Enable SSL with Let’s Encrypt.
- Force HTTPS redirects.
- Check that the domain points to the correct document root.
- Replace placeholder contact details before launch.

## Content updates

Common edits can be made directly in `index.html`:

- Update menu cards in the **Food & Drink** section.
- Add live dates in the **Events** section.
- Replace the placeholder address and opening hours in the **Visit** section.
- Replace `bookings@captainhowey.example` and `hello@captainhowey.example` with real email addresses.
- Replace the map placeholder with an embedded Google Maps iframe when the pub location is confirmed.

## Future upgrade roadmap

The static site is intentionally structured as a strong launchpad for future digital services:

- **WordPress version**: migrate the design into a custom WordPress theme so staff can manage menus, events and notices from the admin area.
- **Mortify /app shell**: wrap the pub experience in an app-style shell for regular customers and future account features.
- **Table ordering**: add QR-based table ordering with basket, payment and kitchen routing.
- **Loyalty scheme**: introduce customer accounts, points, stamps or member-only rewards.
- **Firebase push alerts**: send opt-in alerts for live music, quiz nights, Sunday food, offers and last-minute updates.
- **Epos Now integration**: connect products, stock, sales data or ordering flows to the Epos Now ecosystem.
- **Marsh Eats ordering integration**: connect takeaway or delivery ordering into Marsh Eats when the pub is ready to expand digital sales.

## Launch checklist

- Replace all placeholder contact details.
- Add the confirmed address and Google Maps embed.
- Confirm opening hours and kitchen service times.
- Add real menus and pricing if required.
- Test the booking mailto flow on mobile and desktop.
- Test the site on iPhone, Android, tablet and desktop sizes.
- Deploy with HTTPS enabled.
