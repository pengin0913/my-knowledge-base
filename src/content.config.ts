import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),                  // 文章標題 (如: 01. 圖靈測試與符號主義)
    topic: z.string(),                  // 所屬主題 (如: AI發展史)
    topicId: z.string(),                // 主題辨識碼 (如: ai-history，對應網址分類)
    order: z.number().default(99),      // 選單排序權重 (越小越靠前)
    description: z.string().optional(), // 摘要說明
    publishDate: z.date().optional(),   // 發布日期
  }),
});

export const collections = {
  docs: docsCollection,
};