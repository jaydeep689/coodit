import React from 'react';
import { Grid } from '@material-ui/core';
import PageContainer from '../container/PageContainer';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import FbRightIconForm from '../forms/fb-elements/FbRightIconForm';

const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: 'Form Layouts',
    },
];

const LoginForm = () => {
    <PageContainer title="Form Layouts" description="this is innerpage">
        {/* breadcrumb */}
        <Breadcrumb title="Form Layouts" items={BCrumb} />
        {/* end breadcrumb */}
        <Grid item lg={6} md={12} xs={12}>
            <FbRightIconForm />
        </Grid>
    </PageContainer>
}

export default LoginForm;