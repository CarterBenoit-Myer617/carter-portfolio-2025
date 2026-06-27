// ═══════════════════════════════════════════
//  API SERVICE — Decoupled, frontend-agnostic
//  Zero-BaaS: No Supabase/Firebase/Amplify
//  Uses standard HTTP via fetch()
// ═══════════════════════════════════════════

interface NewsletterPayload {
  identity: { email: string };
  context: { source: string };
  consent: { newsletterOptIn: true; optInTimestamp: string };
}

/**
 * Submit newsletter signup.
 *
 * Replace `NEWSLETTER_ENDPOINT` with your real backend URL.
 * In development this will simulate a ~1s network round-trip
 * and always resolve successfully.
 */
const NEWSLETTER_ENDPOINT =
  import.meta.env.VITE_NEWSLETTER_API ?? '/api/newsletter';

export const ApiService = {
  async submitNewsletter(payload: NewsletterPayload): Promise<{ ok: boolean }> {
    // ── DEV STUB ──────────────────────────────
    // Remove this block once a real endpoint is wired up.
    if (NEWSLETTER_ENDPOINT === '/api/newsletter') {
      await new Promise(r => setTimeout(r, 1200));
      console.info('[ApiService] DEV STUB — payload sent:', payload);
      return { ok: true };
    }
    // ──────────────────────────────────────────

    const res = await fetch(NEWSLETTER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`Newsletter API responded ${res.status}`);
    return { ok: true };
  },
};
