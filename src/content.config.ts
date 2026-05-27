import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Journal entries — research-notebook-style essays, field notes,
 * studio diary. ID = filename slug (e.g. `jnl-001`).
 */
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    accession: z.string(),                 // e.g. "JNL · 001"
    date: z.coerce.date(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    readTime: z.string().optional(),       // e.g. "6 min"
    author: z.string().default('Heidi'),
    session: z.string().optional(),        // studio session window
    weather: z.string().optional(),        // weather snapshot
    abstract: z.string().optional(),       // italic teaser shown above body
    draft: z.boolean().default(false),
  }),
});

/**
 * Works — individual ceramic vessels. ID = filename slug
 * (e.g. `cape-01-lv-001` for ES·2026·CAPE-01·LV·001).
 */
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    accession: z.string(),                 // e.g. "ES · 2026 · CAPE-01 · LV · 001"
    title: z.string(),                     // e.g. "Cape · 01 · I"
    titleZh: z.string(),                   // e.g. "第一岬角 · 巨石"
    series: z.string(),                    // "CAPE-01"
    type: z.enum(['LV', 'MV', 'CP', 'BW', 'JR', 'OB']),
    serial: z.string(),                    // "001"
    date: z.coerce.date(),

    // Physical tombstone data
    dimensions: z.string().optional(),     // e.g. "H 32 × W 24 cm"
    dimensionsAlt: z.string().optional(),  // e.g. "(12.6 × 9.4 in)"
    weight: z.string().optional(),
    medium: z.string().optional(),
    edition: z.string().optional(),

    // Statement
    statement: z.string().optional(),
    statementZh: z.string().optional(),

    // Materials breakdown (sum should be 100%)
    materials: z.array(z.object({
      formula: z.string(),                 // "Al₂Si₂O₅(OH)₄"
      name: z.string(),                    // "高嶺土 · Kaolin"
      pct: z.string(),                     // "42%"
    })).default([]),

    // Firing curve
    firing: z.object({
      temp: z.string(),                    // "1240°C"
      atmosphere: z.string(),              // "Reduction"
      duration: z.string(),                // "14 h"
    }).optional(),

    // Inquiry / availability
    status: z.enum(['available', 'reserved', 'sold', 'not-for-sale']).default('available'),

    draft: z.boolean().default(false),
  }),
});

export const collections = { journal, works };
