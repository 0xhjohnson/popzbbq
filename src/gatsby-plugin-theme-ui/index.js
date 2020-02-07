import { tailwind } from '@theme-ui/presets';

export default {
  ...tailwind,
  styles: {
    ...tailwind.styles,
    header: {
      py: 1
    },
    link: {
      px: [1, 2],
      color: 'gray.4',
      transition: 'all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
      '&:hover': {
        color: 'gray.2'
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
