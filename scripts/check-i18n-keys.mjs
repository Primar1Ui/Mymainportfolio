#!/usr/bin/env node
/**
 * Assert en.json, es.json, and fr.json share the same key structure.
 * Exits 1 and prints missing keys when locales drift apart.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const locales = ['en', 'es', 'fr'];

function flattenKeys(obj, prefix = '') {
  const keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...flattenKeys(value, path));
    } else {
      keys.push(path);
    }
  }
  return keys.sort();
}

const byLocale = Object.fromEntries(
  locales.map((locale) => {
    const file = join(root, 'messages', `${locale}.json`);
    const data = JSON.parse(readFileSync(file, 'utf8'));
    return [locale, new Set(flattenKeys(data))];
  })
);

const base = byLocale.en;
let failed = false;

for (const locale of locales) {
  if (locale === 'en') continue;
  const keys = byLocale[locale];
  const missingInLocale = [...base].filter((k) => !keys.has(k));
  const extraInLocale = [...keys].filter((k) => !base.has(k));

  if (missingInLocale.length || extraInLocale.length) {
    failed = true;
    console.error(`\nLocale mismatch: ${locale} vs en`);
    if (missingInLocale.length) {
      console.error(`  Missing in ${locale}:`);
      missingInLocale.forEach((k) => console.error(`    - ${k}`));
    }
    if (extraInLocale.length) {
      console.error(`  Extra in ${locale}:`);
      extraInLocale.forEach((k) => console.error(`    - ${k}`));
    }
  }
}

if (failed) {
  console.error('\ncheck-i18n-keys: failed');
  process.exit(1);
}

console.log(`check-i18n-keys: OK (${base.size} keys in en/es/fr)`);
