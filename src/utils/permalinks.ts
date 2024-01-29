import { trim } from './trim'
import { SITE } from '~/config.mjs'

const BASE_PATHNAME = SITE.basePathname

export const trimSlash = (s: string) => trim(trim(s, '/'))

export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/')
