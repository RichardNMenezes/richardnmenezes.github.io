import type { ProjectSlug } from '../projects'
import { bellafyByLocale } from './bellafy'
import { commiByLocale } from './commi'
import { crystalLabByLocale } from './crystalLab'
import { linkesByLocale } from './linkes'
import { universusMergeByLocale } from './universusMerge'
import type { PrivacyDoc } from './types'

const registry: Record<ProjectSlug, Record<string, PrivacyDoc>> = {
  'commi-app': commiByLocale,
  linkes: linkesByLocale,
  'crystal-lab': crystalLabByLocale,
  'universus-merge': universusMergeByLocale,
  bellafy: bellafyByLocale,
}

export const privacyLangButtonLabel: Record<string, string> = {
  'pt-BR': 'Português (BR)',
  'pt-PT': 'Português (PT)',
  en: 'English',
  es: 'Español',
  ru: 'Русский',
}

export function getPrivacyLocaleIds (slug: ProjectSlug): string[] {
  return Object.keys (registry[slug])
}

export function isValidPrivacySlug (slug: string): slug is ProjectSlug {
  return slug in registry
}

/** locale query ou pt-BR por defeito */
export function resolvePrivacyLocale (slug: ProjectSlug, raw: string | null): string {
  const allowed = getPrivacyLocaleIds (slug)
  const fallback = 'pt-BR'
  if (!raw || !allowed.includes (raw)) return fallback
  return raw
}

export function getPrivacy (slug: string, locale: string): PrivacyDoc | undefined {
  if (!isValidPrivacySlug (slug)) return undefined
  const map = registry[slug]
  const key = resolvePrivacyLocale (slug, locale)
  return map[key]
}

export function lastUpdatedLabelForLocale (locale: string): string {
  const labels: Record<string, string> = {
    'pt-BR': 'Última atualização',
    'pt-PT': 'Última atualização',
    en: 'Last updated',
    es: 'Última actualización',
    ru: 'Последнее обновление',
  }
  return labels[locale] ?? labels['pt-BR']
}

export function langNavLabelForLocale (locale: string): string {
  const labels: Record<string, string> = {
    'pt-BR': 'Idioma',
    'pt-PT': 'Idioma',
    en: 'Language',
    es: 'Idioma',
    ru: 'Язык',
  }
  return labels[locale] ?? 'Idioma'
}

export function langNavAriaForLocale (locale: string): string {
  if (locale === 'en') return 'Choose language'
  if (locale === 'ru') return 'Выбор языка'
  if (locale === 'es') return 'Elegir idioma'
  return 'Escolher idioma'
}

export type { PrivacyDoc, PrivacySection } from './types'
