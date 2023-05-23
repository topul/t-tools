import {atom} from 'jotai'

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export const appTheme = atom(ThemeEnum.light)
