# 📄 SDD Specification: Next.js Blog with Supabase SDK

## 1. Context & Role
**Role:** Senior Fullstack Developer.
**Project:** Refactor a static Next.js 15 (App Router) project into a dynamic blog.
**Stack:** Next.js 15, React 19, Tailwind CSS 4, Supabase SDK (@supabase/supabase-js), Supabase (PostgreSQL).

## 2. Technical Constraints
- **Data Fetching:** Use Server Components (async/await) for all database operations.
- **SDK:** Supabase SDK is mandatory for database interactions (No Prisma).
- **Styling:** Tailwind CSS 4 only.
- **Types:** Strict TypeScript usage for all new components and functions.
- **Directory Structure:** Adhere to the `app/` directory (App Router) conventions.

## 3. Data Model (Supabase Table)
The `Post` table structure (created in Supabase):
- `id`: int8 (Primary Key, Identity)
- `title`: text (Not Null)
- `slug`: text (Unique, Not Null)
- `content`: text (Markdown content)
- `excerpt`: text (Short summary)
- `published`: boolean (Default: false)
- `createdAt`: timestamptz (Default: now())

## 4. Implementation Roadmap

### Phase 1: Infrastructure & Cleanup
1.  **Remove Prisma:** Uninstall `prisma`, `@prisma/client` and delete `prisma/` folder and `prisma.config.ts`.
2.  **Install SDK:** Install `@supabase/supabase-js`, `lucide-react`, and `react-markdown`.
3.  **Client Setup:** Create `lib/supabase.ts` to initialize the Supabase client using Environment Variables.
4.  **Env Config:** Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are in `.env`.

### Phase 2: Data Management
1.  **Manual Verification:** Ensure the `Post` table exists in Supabase (already created via SQL Editor).
2.  **Test Data:** Use existing data in Supabase. No local seeding via Prisma.

### Phase 3: Dynamic Frontend Implementation
1.  **Home Page:** Refactor to fetch and display the post list using `supabase.from('Post').select('*')`.
2.  **Individual Post Page:** Create dynamic route `app/blog/[slug]/page.tsx` to fetch a single post by slug.
3.  **Markdown Rendering:** Use `react-markdown` to render the `content` field.
4.  **Error Handling:** Implement `notFound()` if a post slug does not exist in the database.

## 5. Definition of Done
- Prisma is fully removed from the project dependencies and files.
- Database connection is established via Supabase API (Port 443).
- Home page and single post pages reflect real data from Supabase.
- No database connection errors (P1001) in the local environment.