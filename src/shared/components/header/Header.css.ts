import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  padding: '24px 60px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const buttonContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
});
