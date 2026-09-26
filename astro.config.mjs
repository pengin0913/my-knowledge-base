// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 1. 替換為你的 GitHub 使用者網址
  site: 'https://pengin0913.github.io',
  
  // 2. 替換為你的儲存庫名稱（前後都要有斜線）
  // 注意：若儲存庫名稱剛好是「<帳號>.github.io」，則 base 設為 '/' 即可
  base: '/my-knowledge-base/',

  trailingSlash: 'always',
});
