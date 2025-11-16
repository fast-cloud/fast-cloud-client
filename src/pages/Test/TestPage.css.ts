import { style } from '@vanilla-extract/css';
import { colors } from '@styles/tokens/colors.css';
import { typographyVars } from '@styles/tokens/typography.css';

export const container = style({
  padding: '48px',
  maxWidth: '1200px',
  margin: '0 auto',
  backgroundColor: colors.gray050,
  minHeight: '100vh',
});

export const title = style({
  ...typographyVars.heading_sb_60,
  color: colors.gray900,
  marginBottom: '48px',
  textAlign: 'center',
});

export const section = style({
  marginBottom: '48px',
  padding: '32px',
  backgroundColor: colors.gray000,
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',

  selectors: {
    '& h2': {
      ...typographyVars.heading_sb_22,
      color: colors.gray000,
      marginBottom: '24px',
    },
  },
});

export const buttonGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  alignItems: 'center',
});
