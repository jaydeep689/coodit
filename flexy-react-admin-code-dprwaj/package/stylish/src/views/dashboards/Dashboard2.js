import React from 'react';
import { Grid, Button, Box } from '@material-ui/core';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

import {
  EarningsShop,
  TopCards,
  ProductPerformance,
  WeeklyStats,
  RecentTransactions,
  Earnings,
  YearlySales,
  ProductsTable,
  MedicalproBranding,
  BlogCard,
} from './dashboard2-components';

import ThemeSelect from './dashboard1-components/ThemeSelect';

const Dashboard2 = () => (
  <PageContainer title="Manage Users" description="You can Manage Your User Here">
    {/* breadcrumb */}
    <Breadcrumb title="Manage Users" subtitle="Welcome SuperAdmin">
      <ThemeSelect />
      <Button
        to="/user-profile"
        component={NavLink}
        sx={{
          ml: 1,
        }}
        variant="contained"
        color="primary"
      >
        <FeatherIcon icon="user" width="18" height="18" />
        <Box fontWeight="400" sx={{ ml: 1 }}>
          Profile
        </Box>
      </Button>
    </Breadcrumb>
    {/* end breadcrumb */}
    <Grid container spacing={0}>
      <Grid item xs={12} lg={4}>
        <EarningsShop />
      </Grid>
      <Grid item xs={12} lg={8}>
        <TopCards />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerformance />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Earnings />
        <YearlySales />
      </Grid>
      <Grid item xs={12} lg={4}>
        <RecentTransactions />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductsTable />
      </Grid>
      <Grid item xs={12} lg={4}>
        <WeeklyStats />
      </Grid>
      <Grid item xs={12} lg={4}>
        <MedicalproBranding />
      </Grid>
      <Grid item xs={12} lg={4}>
        <BlogCard />
      </Grid>
    </Grid>
  </PageContainer>
);

export default Dashboard2;
