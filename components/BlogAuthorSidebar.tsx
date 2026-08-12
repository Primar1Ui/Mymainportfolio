import LocalizedLink from '@/components/LocalizedLink';
import {
  SITE_BRAND,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_GITHUB,
  SITE_LEGAL_NAME,
} from '@/lib/site';

export default function BlogAuthorSidebar() {
  return (
    <aside
      aria-labelledby="about-author-heading"
      className="rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] p-5"
    >
      <h2 id="about-author-heading" className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)] mb-3">
        About the author
      </h2>
      <p className="text-base font-semibold text-[var(--foreground)] mb-1">
        {SITE_LEGAL_NAME}
      </p>
      <p className="text-sm text-[var(--muted)] mb-3">{SITE_BRAND}</p>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
        {SITE_DESCRIPTION}
      </p>
      <ul className="space-y-2 text-sm">
        <li>
          <LocalizedLink href="/about" className="text-red-500 hover:text-red-400">
            About page
          </LocalizedLink>
        </li>
        <li>
          <LocalizedLink href="/hire" className="text-red-500 hover:text-red-400">
            Hire me
          </LocalizedLink>
        </li>
        <li>
          <LocalizedLink href="/contact" className="text-red-500 hover:text-red-400">
            Contact
          </LocalizedLink>
        </li>
        <li>
          <a href={`mailto:${SITE_EMAIL}`} className="text-red-500 hover:text-red-400">
            {SITE_EMAIL}
          </a>
        </li>
        <li>
          <a
            href={SITE_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400"
          >
            GitHub
          </a>
        </li>
      </ul>
    </aside>
  );
}
