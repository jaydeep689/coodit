import React from 'react';
import {
    Box,
    Grid,
    Stepper,
    Step,
    StepLabel,
    Button,
    Card,
    Typography,
    FormControlLabel,
} from '@material-ui/core';
import PageContainer from '../container/PageContainer';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import CountrySelectAutocomplete from '../forms/autoComplete/CountrySelectAutocomplete';
import CustomTextField from '../forms/custom-elements/CustomTextField';
import CustomCheckbox from '../forms/custom-elements/CustomCheckbox';
import CustomFormLabel from '../forms/custom-elements/CustomFormLabel';

const steps = ['Account', 'Address','Profile', 'Finish'];


const FormWizard = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => step === 1;

    const isStepSkipped = (step) => skipped.has(step);

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    // eslint-disable-next-line consistent-return
    const handleSteps = (step) => {
        switch (step) {
            case 0:
                return (
                    <Box sx={{ p: 3 }}>
                        <Grid container spacing={3}>
                            <Grid item md={4} sm={12}>
                                <CustomFormLabel htmlFor="FirstName">First Name</CustomFormLabel>
                                <CustomTextField
                                    id="FirstName"
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mt: 1, mb: 3, mr: 2 }}
                                />
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <CustomFormLabel htmlFor="MiddleName">Middle Name</CustomFormLabel>
                                <CustomTextField
                                    id="MiddleName"
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mt: 1, mb: 3, mr: 2 }}
                                />
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <CustomFormLabel htmlFor="LastName">Last Name</CustomFormLabel>
                                <CustomTextField
                                    id="LastName"
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mt: 1, mb: 3, mr: 2 }}
                                />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <CustomFormLabel htmlFor="Email">Email</CustomFormLabel>
                                <CustomTextField
                                    id="Email"
                                    size="small"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mt: 1, mb: 3 }}
                                />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <CustomFormLabel htmlFor="AlternateEmail">Alternate Email</CustomFormLabel>
                                <CustomTextField
                                    id="AlternateEmail"
                                    size="small"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mt: 1, mb: 3 }}
                                />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <CustomFormLabel htmlFor="PersonalMobile">Personal Mobile</CustomFormLabel>
                                <CustomTextField
                                    id="PersonalMobile"
                                    size="small"
                                    type="PersonalMobile"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mt: 1, mb: 3 }}
                                />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <CustomFormLabel htmlFor="WorkPhone">Work Mobile</CustomFormLabel>
                                <CustomTextField
                                    id="WorkPhone"
                                    size="small"
                                    type="WorkPhone"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mt: 1, mb: 3 }}
                                />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <CustomFormLabel htmlFor="date">Date of Birth</CustomFormLabel>
                                <CustomTextField
                                    id="date"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                );
            case 1:
                return (
                    <Box sx={{ p: 3 }}>
                        <CustomFormLabel htmlFor="AddressLine1">Address Line 1</CustomFormLabel>
                        <CustomTextField
                            id="AddressLine1"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 1, mb: 3 }}
                        />
                        <CustomFormLabel htmlFor="AddressLine2">Address Line 2</CustomFormLabel>
                        <CustomTextField
                            id="AddressLine1"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 1, mb: 3 }}
                        />
                        <Grid container spacing={3}>
                            <Grid item md={6} sm={12}>
                                <CustomFormLabel
                                    sx={{
                                        mt: 0,
                                    }}
                                    htmlFor="city-text"
                                >
                                    City
                                </CustomFormLabel>
                                <CustomTextField id="city-text" variant="outlined" fullWidth size="small" />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <CustomFormLabel
                                    sx={{
                                        mt: 0,
                                    }}
                                    htmlFor="state-text"
                                >
                                    State
                                </CustomFormLabel>
                                <CustomTextField id="state-text" variant="outlined" fullWidth size="small" />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <CustomFormLabel
                                    sx={{
                                        mt: 0,
                                    }}
                                    htmlFor="post-text"
                                >
                                    Zip Code
                                </CustomFormLabel>
                                <CustomTextField id="post-text" variant="outlined" fullWidth size="small" />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <CountrySelectAutocomplete />
                                {/* <CustomFormLabel
                                    sx={{
                                        mt: 0,
                                    }}
                                    htmlFor="country-text"
                                >
                                    Country
                                </CustomFormLabel>
                                <CustomSelect
                                    id="country-select"
                                    value={country}
                                    onChange={handleChange4}
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                >
                                    {countries.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CustomSelect> */}
                            </Grid>
                        </Grid>

                    </Box>
                );
            case 2:
                return (
                    <Box sx={{ p: 3 }}>
                        <CustomFormLabel htmlFor="UserName">User Name</CustomFormLabel>
                        <CustomTextField
                            id="FirstName"
                            size="small"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 1, mb: 3, mr: 2 }}
                        />
                        <CustomFormLabel htmlFor="Password">Password</CustomFormLabel>
                        <CustomTextField
                            id="Password"
                            size="small"
                            type="password"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 1, mb: 3, mr: 2 }}
                        />
                        <CustomFormLabel htmlFor="ConfirmPassword">Confirm Password</CustomFormLabel>
                                <CustomTextField
                                    id="Email"
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mt: 1, mb: 3 }}
                                />
                    </Box>
                );
            case 3:
                return (
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h5">Terms and condition</Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Sard about this site or you have been to it, but you cannot figure out what it is or
                            what it can do. MTA web directory isSard about this site or you have been to it, but
                            you cannot figure out what it is or what it can do. MTA web directory is
                        </Typography>
                        <FormControlLabel
                            control={<CustomCheckbox defaultChecked />}
                            label="Agree with terms?"
                        />
                    </Box>
                );
            default:
                break;
        }
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <PageContainer>
            <Breadcrumb title="Register With Us!" description="this is Form Registration page" />
            <Card variant="outlined">
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = <Typography variant="caption">Information</Typography>;
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Box sx={{ m: 3, p: 2, backgroundColor: 'primary.light', borderRadius: 1 }}>
                                All steps completed - you&apos;re finished
                            </Box>

                            <Box display="flex" sx={{ flexDirection: 'row', p: 3 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset} variant="contained" color="error">
                                    Reset
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box>{handleSteps(activeStep)}</Box>

                            <Box display="flex" sx={{ flexDirection: 'row', p: 3 }}>
                                <Button
                                    color="inherit"
                                    variant="contained"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {isStepOptional(activeStep) && 
                                (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        Skip
                                    </Button>
                                )
                                }

                                <Button
                                    onClick={handleNext}
                                    variant="contained"
                                    color={activeStep === steps.length - 1 ? 'success' : 'secondary'}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </Card>
        </PageContainer>
    );
};

export default FormWizard;
