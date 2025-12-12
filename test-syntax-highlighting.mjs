// Test script to verify syntax highlighting works
import { codeToHtml } from 'shiki';

const testCode = `async function BlogPost({ slug }) {
  const post = await loadPost(slug);
  return <article>{post.content}</article>;
}`;

try {
  const html = await codeToHtml(testCode, {
    lang: 'jsx',
    theme: 'one-dark-pro'
  });

  console.log('✅ Syntax highlighting test PASSED');
  console.log('Generated HTML length:', html.length);
  console.log('Contains shiki class:', html.includes('shiki'));
  console.log('Contains color styles:', html.includes('color:'));
  console.log('\nSample output (first 200 chars):');
  console.log(html.substring(0, 200) + '...');
} catch (error) {
  console.error('❌ Syntax highlighting test FAILED');
  console.error(error);
  process.exit(1);
}
