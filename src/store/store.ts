import {atom} from 'jotai'

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}
export enum LanguageEnum {
  en = 'en',
  zh = 'zh',
}

export const appTheme = atom(ThemeEnum.light)
export const appLanguage = atom(LanguageEnum.zh)
