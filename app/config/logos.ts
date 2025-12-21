import logo from '../logos/SDElogo.png';
import logoSmall from '../logos/sdelogosmall.png';

export const logos = {
  default: logo,
  small: logoSmall,
} as const;

export type LogoType = keyof typeof logos;

