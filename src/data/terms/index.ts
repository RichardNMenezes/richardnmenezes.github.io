import type { ProjectSlug } from '../projects'
import { rotivooTermsByLocale } from './rotivoo'
import type { TermsDoc } from './types'

const registry: Partial<Record<ProjectSlug, Record<string, TermsDoc>>> = {
  rotivoo: rotivooTermsByLocale,
}

export function getTermsLocaleIds (slug: ProjectSlug): string[] {
  return Object.keys (registry[slug] ?? {})
}

export function isValidTermsSlug (slug: string): slug is ProjectSlug {
  return slug in registry
}

export function resolveTermsLocale (slug: ProjectSlug, raw: string | null): string {
  const allowed = getTermsLocaleIds (slug)
  const fallback = 'pt-BR'
  if (!raw || !allowed.includes (raw)) return fallback
  return raw
}

export function getTerms (slug: string, locale: string): TermsDoc | undefined {
  if (!isValidTermsSlug (slug)) return undefined
  const map = registry[slug]
  if (!map) return undefined
  const key = resolveTermsLocale (slug, locale)
  return map[key]
}

export type { TermsDoc, TermsSection } from './types'
