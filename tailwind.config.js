module.exports = {
    content: ['./index.html', './bibliotecas.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary-container': '#035C8F', 'on-tertiary': '#ffffff', 'on-tertiary-container': '#a7a5a4',
                'primary-fixed': '#DCEEFB', error: '#ba1a1a', tertiary: '#590808', 'on-error': '#ffffff',
                'surface-dim': '#dadada', 'on-surface-variant': '#434750', 'outline-variant': '#c3c6d1',
                'tertiary-container': '#0D0D0D', secondary: '#D91414', 'secondary-container': '#F2B705',
                'tertiary-fixed-dim': '#c9c6c5', 'primary-fixed-dim': '#8ECDEF', 'surface-container-high': '#e8e8e8',
                outline: '#737781', 'on-error-container': '#93000a', 'surface-variant': '#e2e2e2',
                'error-container': '#ffdad6', 'on-primary-fixed': '#00243B', 'surface-bright': '#f9f9f9',
                'surface-tint': '#0477BF', 'tertiary-fixed': '#e5e2e1', 'secondary-fixed-dim': '#D91414',
                'on-secondary': '#ffffff', 'on-surface': '#1a1c1c', 'secondary-fixed': '#F2B705',
                'on-tertiary-fixed-variant': '#474646', 'on-primary': '#ffffff', 'on-primary-fixed-variant': '#035C8F',
                'on-background': '#1a1c1c', 'on-secondary-container': '#1a1c1c', 'surface-container': '#eeeeee',
                'surface-container-lowest': '#ffffff', 'surface-container-low': '#f3f3f3',
                'on-secondary-fixed-variant': '#7A0000', 'inverse-surface': '#2f3131',
                'on-tertiary-fixed': '#1c1b1b', 'inverse-on-surface': '#f1f1f1',
                'surface-container-highest': '#e2e2e2', 'inverse-primary': '#8ECDEF',
                'on-primary-container': '#8ECDEF', 'on-secondary-fixed': '#590808', primary: '#0477BF',
                surface: '#f9f9f9', background: '#f9f9f9', 'primary-dark': '#035C8F',
                'primary-soft': '#DCEEFB', accent: '#F2B705', ink: '#1a1c1c', muted: '#434750'
            },
            borderRadius: { DEFAULT: '0.5rem', lg: '1rem', xl: '1.5rem', full: '9999px' },
            spacing: { xs: '8px', lg: '40px', 'container-max': '1280px', sm: '16px', xl: '64px', md: '24px', gutter: '24px', base: '4px' },
            maxWidth: { content: '1280px' },
            fontFamily: {
                'body-lg': ['Inter'], 'label-md': ['Inter'], 'display-lg-mobile': ['Inter'], 'body-md': ['Inter'],
                'headline-md': ['Inter'], 'headline-lg': ['Inter'], 'label-sm': ['Inter'], 'display-lg': ['Inter'],
                headline: ['Inter'], display: ['Inter'], body: ['Inter'], label: ['Inter'], sans: ['Inter', 'sans-serif']
            },
            fontSize: {
                'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
                'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '500' }],
                'display-lg-mobile': ['36px', { lineHeight: '42px', letterSpacing: '-0.02em', fontWeight: '700' }],
                'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
                'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
                'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '600' }],
                'label-sm': ['12px', { lineHeight: '16px', fontWeight: '600' }],
                'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }]
            }
        }
    }
};
