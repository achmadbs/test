import styled from 'styled-components';

export const HomeContainer = styled.div({
  padding: '0 2.5rem',
});

export const Header = styled.div({
  padding: '3rem 0 1.25rem',
  borderBottom: '1px solid #DFE5EE',
  marginBottom: '2.8rem',
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const HeaderTitle = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  '& > h2': {
    fontWeight: 500,
    fontSize: '2rem',
  },
  '& > span': {
    color: 'var(--sub-text)',
    fontSize: 12,
    alignSelf: 'end',
  },
});

export const Tab = styled.div({
  marginTop: '2.3rem',
  color: 'var(--primary)',
  fontWeight: 500,
  ' > p': {
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      marginTop: '2.4rem',
      width: '100%',
      borderBottom: '2px solid var(--primary)',
      zIndex: 2,
    },
  },
});

export const Schedule = styled.div({
  border: '1px solid #DFE5EE',
  boxShadow: 'inset 0px 0px 3px rgba(0, 0, 0, 0.12)',
  borderRadius: 8,
  padding: '1.5rem',
  color: '#252A3C',
  fontWeight: 500,
  marginBottom: '1.6rem',
});

export const SessionContainer = styled.div({
  border: '1px solid #DFE5EE',
  boxShadow: 'inset 0px 0px 3px rgba(0, 0, 0, 0.12)',
  borderRadius: 8,
  padding: '16px 24px 16px 0',
  display: 'flex',
  flexDirection: 'column',
  '& > p': {
    cursor: 'pointer',
  },
});

export const SessionHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 10,
  flex: 1,
});

export const SessionActions = styled.div(({ isEditing }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: 24,
  '& > input': {
    fontSize: 20,
    display: isEditing ? 'block' : 'none',
    border: '1px solid',
    borderRadius: 8,
    padding: 4,
  },
  '& > p': {
    display: isEditing ? 'none' : 'block',
  },
  '& > img:last-of-type': {
    cursor: 'pointer',
  },
}));

export const Main = styled.main({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '& ~ div': {
    marginTop: '1.6rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export const ActionsContainer = styled.div(({ isActive }) => {
  return {
    ...(isActive && {
      backgroundColor: 'var(--active)',
    }),
    margin: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
});

export const Actions = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const Required = styled.p({
  fontWeight: 'bold',
  color: 'var(--primary)',
});
