import { ReplaceList } from './@types/types'

export const replaceList: ReplaceList = [
  { regexp: /^/, value: '<!DOCTYPE html>' },
  { regexp: /&lt;/g, value: '<' },
  { regexp: /&gt;/g, value: '>' },
  { regexp: /&amp;/g, value: '&' },
  { regexp: /charSet=/g, value: 'charset=' },
  { regexp: /frameBorder=/g, value: 'frameborder=' },
  { regexp: /htmlonclick/g, value: 'onclick' },
  { regexp: /hrefLang/g, value: 'hreflang' },
  { regexp: /colSpan/g, value: 'colspan' },
  { regexp: /&#x27;/g, value: "'" },
  { regexp: /htmlchecked/g, value: 'checked' },
  { regexp: /async=""/g, value: 'async' }
]
