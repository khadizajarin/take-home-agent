
# ArkLab AI Agent Catalog 📒

A responsive, SEO-friendly AI Agent Catalog built with **Next.js 15**, **TypeScript**, **Redux**, **Shadcn UI**, **Framer Motion**, and **NextAuth (Google OAuth)**. This project is a submission for ArkLab's Frontend Developer Intern Take-Home Challenge.

## 🚀 Live Demo
[🔗 Deployed on Vercel](https://take-home-agent.vercel.app/)

---

## 📑 Features

✅ AI Agent listing page with:
- Name, description, status, category, and pricing model.
- Responsive, card-based grid layout (built with Shadcn UI).

✅ **Server-Side Rendering (SSR)** with `getServerSideProps`:
- Fetches agent data from a mock JSON file.
- Pre-renders initial data for SEO and faster first paint.

✅ **Client-side Search & Filtering**:
- Real-time search by name/description.
- Multi-select Status and Category filters.
- Single-select Pricing Model filter.
- "Clear All Filters" button.

✅ **Responsive Design**:
- Mobile-first, adaptable layouts using CSS grid + Tailwind.

✅ **Basic SEO**:
- Dynamic `<title>` and `<meta>` tags with Next.js `<Head>` component.

✅ **Framer Motion Animations**:
- Smooth fade-in effects on card render and page transitions.

✅ **Optional Advanced: Google OAuth (NextAuth.js)**:
- Sign-in with Google integration.
- Session management using NextAuth.
- Login and protected routes.

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Shadcn UI](https://ui.shadcn.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📂 Project Structure

```bash
src/
components/
AgentCard.tsx
Navbar.tsx
ui/
pages/
agents.tsx
index.tsx
_app.tsx
api/
auth/[...nextauth].ts
public/
mock-agents.json
styles/
.env.local.example
next.config.js
package.json
tailwind.config.ts
```




## 🧑‍💻 Getting Started (Local Development)

### 1️⃣ Clone the repo:
```bash
git clone https://github.com/yourusername/arklab-agent-catalog.git
cd arklab-agent-catalog
```
### 2️⃣ Install dependencies:
```bash
npm install
```
### 3️⃣ Setup Environment Variables:
Create a .env.local file based on the provided .env.local.example:

```bash
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
NEXTAUTH_SECRET=some-random-string
NEXTAUTH_URL=http://localhost:3000
``` 

4️⃣ Run the development server:
```bash
npm run dev
```

Visit http://localhost:3000 to view the app.

## 📌 Notes & Challenges
Implemented protected routes via NextAuth's session-based authentication.

Faced React hook mismatch error due to conditional hooks; resolved by ensuring no hooks after early returns.

Added Framer Motion for agent card animations.

Integrated SSR for optimal SEO and preloaded agent data.

## 📃 License
MIT

## 🌟 Acknowledgments
Thanks to the ArkLab team for this engaging challenge.
