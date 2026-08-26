export type TermsSection = { heading: string, body: string }

export type TermsDoc = {
  locale: string
  htmlLang: string
  title: string
  meta: string
  intro: string
  sections: TermsSection[]
  lastUpdated: string
}
