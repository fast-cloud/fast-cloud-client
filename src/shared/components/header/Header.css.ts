import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: '24px 60px',
  display: 'flex',
  justifyContent: 'space-between',
  zIndex: 1000,
});

export const buttonContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
});
