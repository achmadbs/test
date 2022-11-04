import styled from 'styled-components';

export const NavbarWraper = styled.nav({
  padding: '0 5rem',
  height: '5.75rem',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '2px 7px 19px -1px rgba(191,185,185,0.6)',
  '& > div': {
    display: 'flex',
    gap: '1.5rem',
    fontWeight: 600,
    alignItems: 'center',
    '& > img': {
      cursor: 'pointer',
    },
    '& > hr': {
      height: '1.5rem',
      width: 0,
      backgroundColor: '#BCC0D0',
    },
  },
});
