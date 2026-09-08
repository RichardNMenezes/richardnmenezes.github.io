export type PrivacySection = {
  heading: string
  body: string
  links?: { label: string, href: string }[]
}

export type PrivacyDoc = {
  locale: string
  htmlLang: string
  title: string
  meta: string
  intro: string
  sections: PrivacySection[]
  lastUpdated: string
}
