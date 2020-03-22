import { tailwind } from '@theme-ui/presets';
import { omit, mergeDeepRight } from 'ramda';
import { toTheme } from '@theme-ui/typography';
import usWebDesign from 'typography-theme-us-web-design-standards';

const tw = omit(['fonts', 'styles', 'buttons', 'inputs'], tailwind);

const theme = mergeDeepRight(
  {
    ...tw,
    fonts: {
      body: '"Source Sans Pro", "sans-serif"',
      heading: 'Merriweather, serif'
    },
    text: {
      footerSubheading: {
        m: 0,
        mb: 1,
        color: 'gray.7',
        fontWeight: 'semibold',
        fontSize: 0
      },
      invalidInput: {
        color: 'red.7',
        my: -2,
        fontSize: 0
      },
      invalidTextarea: {
        color: 'red.7',
        mb: 0,
        fontSize: 0
      }
    },
    layout: {
      container: {
        maxWidth: '1280px'
      }
    },
    forms: {
      label: {
        fontSize: 1,
        fontWeight: 'semibold'
      },
      input: {
        borderColor: 'gray.7',
        p: '8px',
        transition: 'all 0.3s, height 0s',
        '&:hover': {
          borderColor: 'primary'
        },
        '&:focus': {
          borderColor: 'primary',
          boxShadow: '0 0 0 2px rgba(43, 108, 176, 0.2)',
          outline: 'none'
        }
      },
      textarea: {
        borderColor: 'gray.7',
        p: '8px',
        transition: 'all 0.3s, height 0s',
        '&:hover': {
          borderColor: 'primary'
        },
        '&:focus': {
          borderColor: 'primary',
          boxShadow: '0 0 0 2px rgba(43, 108, 176, 0.2)',
          outline: 'none'
        }
      },
      invalidInput: {
        borderColor: 'red.7',
        p: '8px',
        '&:focus': {
          boxShadow: '0 0 0 2px rgba(197, 48, 48, 0.2)',
          outline: 'none'
        }
      },
      invalidTextarea: {
        borderColor: 'red.7',
        p: '8px',
        '&:focus': {
          boxShadow: '0 0 0 2px rgba(197, 48, 48, 0.2)',
          outline: 'none'
        }
      }
    },
    styles: {
      root: {
        ul: {
          m: 0,
          p: 0
        }
      },
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
      mobileHeaderLink: {
        py: 1,
        px: 2,
        color: 'gray.4',
        textDecoration: 'none',
        borderRadius: '.375rem',
        transition: 'all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
        display: 'block',
        '&:hover': {
          bg: 'gray.8',
          color: 'gray.2'
        }
      },
      navItems: {
        py: 1,
        px: [null, 1, 2],
        listStyleType: 'none',
        '&:last-child': {
          ml: [null, 1, 2, 4],
        },
        '&:last-child a': {
          py: 1,
          px: [null, 1, 2],
          cursor: 'pointer',
          fontSize: 0,
          bg: 'gray.8',
          fontWeight: 'semibold',
          borderRadius: 'default',
          maxHeight: '35px',
          '&:hover': {
            bg: 'gray.7',
            transition: 'all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000)'
          }
        }
      },
      footerBlock: {
        // py: 3,
        gridColumn: 'span 1 / span 1',
        // px: [2, 0]
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
        m: 1,
        transition: 'all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
        '&:hover': {
          color: 'gray.6'
        }
      }
    },
    buttons: {
      close: {
        width: 10,
        height: 10,
        color: 'gray.4',
        borderRadius: '.375rem',
        cursor: 'pointer',
        '&:hover': {
          color: 'gray.1',
          bg: 'gray.8'
        },
        transitionDuration: '.15s',
        transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
        transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform'
      },
      menu: {
        width: 10,
        height: 10,
        color: 'gray.4',
        borderRadius: '.375rem',
        cursor: 'pointer',
        '&:hover': {
          color: 'gray.1',
          bg: 'gray.8'
        },
        transitionDuration: '.15s',
        transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
        transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform'
      },
      primary: {
        color: 'background',
        bg: 'blue.7',
        cursor: 'pointer',
        outline: 0,
        transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
        '&:hover, &:focus': {
          bg: 'blue.6'
        },
        '&:active': {
          bg: 'blue.8'
        }
      },
      outline: {
        py: 1,
        px: 2,
        cursor: 'pointer',
        fontSize: 0,
        lineHeight: 'inherit',
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        color: 'gray.7',
        fontWeight: 'semibold',
        borderRadius: 'default',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          color: 'gray.6',
          borderColor: 'gray.6'
        }
      }
    },
    minimal: {
      py: 1,
      px: 2,
      cursor: 'pointer',
      fontSize: 0,
      lineHeight: 'inherit',
      fontWeight: 'semibold',
      backgroundColor: 'transparent',
      borderRadius: 'default',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      color: 'gray.7',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000)',
      '&:hover': {
        color: 'gray.6',
        borderColor: 'gray.6'
      }
    }
  },
  toTheme(usWebDesign)
);

export default theme;
