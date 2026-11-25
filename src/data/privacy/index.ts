import type { ProjectSlug } from '../projects'
import { bellafyByLocale } from './bellafy'
import { crazyCondominiumByLocale } from './crazyCondominium'
import { commiByLocale } from './commi'
import { crystalLabByLocale } from './crystalLab'
import { gliniByLocale } from './glini'
import { linkesByLocale } from './linkes'
import { palworldPaldeckByLocale } from './palworldPaldeck'
import { rotivooByLocale } from './rotivoo'
import { shinyFarmByLocale } from './shinyFarm'
import { universusMergeByLocale } from './universusMerge'
import type { PrivacyDoc } from './types'

type PrivacySlug = ProjectSlug | 'glini'

const registry: Record<PrivacySlug, Record<string, PrivacyDoc>> = {
  'crazy-condominium': crazyCondominiumByLocale,
  'commi-app': commiByLocale,
  linkes: linkesByLocale,
  'crystal-lab': crystalLabByLocale,
  'universus-merge': universusMergeByLocale,
  bellafy: bellafyByLocale,
  glini: gliniByLocale,
  rotivoo: rotivooByLocale,
  'palworld-paldeck': palworldPaldeckByLocale,
  'shiny-farm': shinyFarmByLocale,
}

export const privacyLangButtonLabel: Record<string, string> = {
  'pt-BR': 'Português (BR)',
  'pt-PT': 'Português (PT)',
  en: 'English',
  es: 'Español',
  ru: 'Русский',
}

export function getPrivacyLocaleIds (slug: PrivacySlug): string[] {
  return Object.keys (registry[slug])
}

export function isValidPrivacySlug (slug: string): slug is PrivacySlug {
  return Object.hasOwn (registry, slug)
}

/** locale query ou pt-BR por defeito */
export function resolvePrivacyLocale (slug: PrivacySlug, raw: string | null): string {
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
