import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import sidebarBuynowsvg from '../../../assets/images/backgrounds/sidebar-buynow-bg.svg';

const Buynow = () => (
  // const customizer = useSelector((state)=> state.CustomizerReducer);

  <Box pb={5} mt={5}>
    <Box
      p={2}
      m={1}
      sx={{
        backgroundColor: (theme) => theme.palette.primary.light,
        borderRadius: '10px',
      }}
      style={{ position: 'relative' }}
    >
      <img src={sidebarBuynowsvg} alt={sidebarBuynowsvg} className="buyNowImg" />
      <Box pb={1} pt={2} sx={{ width: '60%' }}>
        <Typography
          variant="h5"
          mb={2}
          sx={{
            color: (theme) => theme.palette.secondary.main,
          }}
        >
          Built with Material-UI
        </Typography>
        <Button
          color="secondary"
          href="https://wrappixel.com/demos/react-admin-templates/flexy-react-dashboard/docs/docs-introduction.html"
          fullWidth
          target="_blank"
          disableElevation
          variant="contained"
        >
          Docs
        </Button>
      </Box>
    </Box>
  </Box>
);
export default Buynow;
