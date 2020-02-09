import { tailwind } from '@theme-ui/presets';
import { omit, mergeDeepRight } from 'ramda';
import { toTheme } from '@theme-ui/typography';
import usWebDesign from 'typography-theme-us-web-design-standards';

let tw = omit(['fonts', 'styles', 'buttons', 'inputs'], tailwind);
console.log(usWebDesign);

const theme = mergeDeepRight(
  {
    ...tw,
    fonts: {
      body: '"Source Sans Pro", "sans-serif"',
      heading: 'Merriweather, serif'
    },
    styles: {
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
      footerBlock: {
        mx: [null, 0, 0, 2, 3],
        py: 3,
        px: [null, 3, null, null, 4]
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
        fontWeight: 'bold',
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
  },
  toTheme(usWebDesign)
);

export default theme;
