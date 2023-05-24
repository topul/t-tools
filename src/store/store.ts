import {atom} from 'jotai'

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}
export enum LanguageEnum {
  en = 'en',
  zh = 'zh',
}

// 从 localStorage 中获取配置
const config = localStorage.getItem('appConfig')
const appConfigInit = config
  ? JSON.parse(config)
  : {
      theme: ThemeEnum.light,
      language: LanguageEnum.zh,
    }

export const appConfig = atom(appConfigInit)
