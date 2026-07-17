## Plan: URL shortener frontend (GENERATED WITH THE HELP OF COPILOT)

This plan scopes the implementation of the features listed in the README: a URL shortening form, account-oriented UI, animated feedback states, and a simple statistics view. Because the project currently only contains the Vite starter app, the first milestone is to replace the starter screen with a purpose-built interface and then add the requested experience incrementally.

**Scope**
- Implement a main URL shortener form with input validation, submit state, and generated results.
- Add a lightweight user/account area with registration/login UI and optional OAuth entry points for Google and Microsoft.
- Add animated feedback for submit success/error, copy action, and missing-short-url states.
- Provide a basic statistics surface that can be driven by local state or local storage until a backend is introduced.

**Implementation phases**
1. App shell and data model
   - Replace the starter content in [src/App.tsx](src/App.tsx) with a single-page layout composed of a hero section, URL form, status panel, and helper text.
   - Introduce local state for the current long URL, short URL result, loading state, error state, copied state, auth form state, and stats counters.
   - Keep data in local component state first, then persist to local storage for a better demo experience.

2. URL shortener interaction
   - Add input validation for URL format and empty values.
   - Wire the submit action to generate a placeholder short URL or mock shortened result, along with a success/error indicator.
   - Expose the shortened link in the UI and allow users to copy it with an explicit visual success animation.

3. User account and auth UX
   - Add a registration/login panel with fields for email and password plus a toggle between sign-up and sign-in views.
   - Add Google and Microsoft buttons as UI affordances even if they remain stubbed for now.
   - Keep the auth flow decoupled from the core shortener flow so the app can later be connected to a real backend or auth provider.

4. Animations and feedback states
   - Add transition classes for the submit button that change based on the form validity and request status.
   - Create a copied URL animation and a “short URL not found” state for the lookup or preview area.
   - Reuse small CSS utility classes in [src/App.css](src/App.css) and [src/index.css](src/index.css) rather than introducing a heavy animation dependency.

5. Statistics view
   - Build a compact stats section for total links created, copied links, and failed lookups.
   - Populate the values from local state and persist them to local storage so refreshes do not reset the demo experience.
   - Keep the presentation intentionally simple until a backend is available.

**Relevant files**
- [src/App.tsx](src/App.tsx) — main app shell and all feature state.
- [src/App.css](src/App.css) — layout, button states, and animation classes.
- [src/index.css](src/index.css) — global theme, resets, and shared component styles.
- [package.json](package.json) — optional dependency additions if we later need a toast library or animation helper.
- [README.md](README.md) — source of scope and acceptance criteria.

**Verification**
1. Run the app locally with the Vite dev server and confirm the main shortener form renders.
2. Verify the form validates invalid URLs, shows success/error feedback, and updates the copied state visually.
3. Confirm the auth panel toggles between register and login views and that the statistics section updates as the user interacts with the app.
4. Run the build command to ensure the TypeScript and Vite build still complete after implementation.

**Decisions and assumptions**
- The initial implementation will be frontend-only and use mock results plus local storage to simulate the backend behavior.
- OAuth buttons will be implemented as placeholders in the UI first; they can be wired to a live provider later.
- Styling should remain lightweight and focused on the requested animations rather than introducing a large design system.
