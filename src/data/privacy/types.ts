export type PrivacySection = { heading: string, body: string }

export type PrivacyDoc = {
  locale: string
  htmlLang: string
  title: string
  meta: string
  intro: string
  sections: PrivacySection[]
  lastUpdated: string
}
