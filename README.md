# Waziristani Naturals

A premium, responsive Next.js storefront for Shilajit and Zaitoon (olive) oil. This is a frontend-only project: cart state is stored in the browser and checkout creates an order message for WhatsApp.

## Requirements

- Node.js 20.9+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Important: configure WhatsApp

Open `src/lib/config.ts` and replace:

```ts
export const WHATSAPP_NUMBER = "923XXXXXXXXX";
```

with your real Pakistan WhatsApp Business number, country code included, without `+`, spaces, or dashes. Example format: `923001234567`.

Until this is configured, checkout intentionally shows a helpful setup message instead of opening an invalid WhatsApp URL.

## Product prices

Edit `src/data/products.ts` to update product names, descriptions, image URLs, sizes, and prices.

- Zaitoon Oil: 250 ml Rs. 1,700; 500 ml Rs. 3,300; 750 ml Rs. 5,100; 1000 ml Rs. 6,200
- Shilajit: 10 g Rs. 2,000

## Images and branding

The logo is a custom inline SVG component in `src/components/Logo.tsx`. Product and landscape photography currently uses remote Unsplash image URLs. For production, replace these with your own verified product photographs and add the relevant image host to `next.config.ts` if you switch to `next/image` remote images.

For production image hosting, download your approved images into `public/images` and update the image paths in `src/data/products.ts` and page components.

## Frontend-only limitations

- Orders are not saved to a server or database.
- WhatsApp opens with a prefilled message; the customer must press Send in WhatsApp.
- Delivery charges and availability must be confirmed directly with the customer.
- No online payment is processed.
- Cart contents are stored in localStorage on the customer's device.

## Build

```bash
npm run build
```
