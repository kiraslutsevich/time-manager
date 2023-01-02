import type { ThemeType } from './lightTheme';
import lightThemeObject from './lightTheme';

declare module 'styled-components' {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/naming-convention
  export interface DefaultTheme extends ThemeType { }
}

export default lightThemeObject;

