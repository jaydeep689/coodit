const components = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        margin: 0,
        padding: 0,
      },
      '#root': {
        height: '100%',
      },
      "*[dir='rtl'] .buyNowImg": {
        transform: 'scaleX(-1)',
      },

      '.buyNowImg': {
        position: 'absolute',
        right: '-19px',
        top: '-18px',
        width: '143px',
        height: '175px',
      },
      '.MuiCardHeader-action': {
        alignSelf: 'center !important',
      },
      '.sidebar-label:first-of-type > .MuiTypography-subtitle2': {
        marginTop: 0,
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: '15px !important',
        paddingRight: '15px !important',
        maxWidth: '1600px',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '15px',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: '9px',
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
        padding: '14px',
        margin: '15px',
        border: '0',
        boxShadow: '0 2px 2.5px rgb(193 202 215 / 25%)',
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '40px',
      },
    },
  },

  MuiGridItem: {
    styleOverrides: {
      root: {
        paddingTop: '30px',
        paddingLeft: '30px !important',
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        backgroundColor: '#ecf0f2',
        borderRadius: '6px',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '0',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: '500',
        fontSize: '0.75rem',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: '16px 14px',
      },
    },
  },
};

export default components;
