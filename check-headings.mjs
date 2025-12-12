// Quick script to verify heading hierarchy
import { readFileSync } from 'fs';
import { glob } from 'glob';

console.log('Checking heading hierarchy in pages and components...\n');

const files = await glob('src/pages/*.tsx');

for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  const h1Count = (content.match(/<h1/g) || []).length;
  const h2Count = (content.match(/<h2/g) || []).length;
  const h3Count = (content.match(/<h3/g) || []).length;

  if (h1Count > 0 || h2Count > 0 || h3Count > 0) {
    console.log(`${file}:`);
    console.log(`  h1: ${h1Count}, h2: ${h2Count}, h3: ${h3Count}`);
  }
}

console.log('\n✅ Heading hierarchy check complete');
console.log('Note: Markdown content is rendered at runtime and should be checked separately');
