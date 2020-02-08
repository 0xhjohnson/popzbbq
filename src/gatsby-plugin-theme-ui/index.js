import { tailwind } from '@theme-ui/presets';

export default {
  ...tailwind,
  styles: {
    ...tailwind.styles,
    header: {
      py: 1
    },
    headerLink: {
      px: [1, 2],
      color: 'gray.4',
      textDecoration: 'none',
      transition: 'all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
      '&:hover': {
        color: 'gray.2'
      }
    },
    footerListItem: {
      listStyleType: 'none',
      color: 'gray.7',
      fontSize: 0,
      pb: 1
    },
    footerLink: {
      color: 'gray.7',
      textDecoration: 'none',
      transition: 'all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
      '&:hover': {
        color: 'gray.6'
      }
    },
    footerIcons: {
      color: 'gray.7',
      fontSize: 2,
      mr: 3,
      transition: 'all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
      '&:hover': {
        color: 'gray.6'
      }
    }
  },
  buttons: {
    outline: {
      py: 1,
      px: 2,
      cursor: 'pointer',
      fontSize: 0,
      lineHeight: 'inherit',
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      color: 'gray.2',
      fontWeight: 'semibold',
      borderRadius: 'default',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: 'primary',
        color: 'white',
        borderColor: 'transparent'
      }
    }
  }
};
