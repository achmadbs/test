import styled from 'styled-components';

export const Btn = styled.button((props) => {
  const { type } = props;

  return {
    ...(type === 'outlined' && {
      backgroundColor: 'var(--white)',
      border: '1px solid var(--primary)',
      color: 'var(--primary)',
    }),
    ...(type === 'contained' && {
      backgroundColor: 'var(--primary)',
      color: 'var(--white)',
      border: 'none',
    }),

    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '13px 12px',
    outline: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: '8px',
  };
});
