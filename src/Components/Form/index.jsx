import React from "react";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Stack, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useForm } from "react-hook-form";


function UserForm() {
    const [formData, setformData] = React.useState(
        {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            phone: ''
        }
    );


    // Skills
    const [state, setState] = React.useState({
        html: false,
        css: false,
        react: false,
        typescript: false,
        css3: false,
        javascript: false,
        jquery: false
    });
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };
    const { html, css, react, typescript, css3, javascript, jquery } = state;
    const errorSkill = [html, css, react, typescript, css3, javascript, jquery].filter((v) => v).length < 2;

    // Date
    const [fromValue, setFromValue] = React.useState(null);
    const [toValue, setToValue] = React.useState(null);


    // ON FORM SUBMIT
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="user_form">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-6 col-12 mb-3">
                    <FormControl fullWidth>
                        <TextField
                            label="First Name"
                            name="firstName"
                            variant="outlined"
                            value={formData.firstName}
                        />
                    </FormControl>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12 mb-3">
                    <FormControl fullWidth>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            variant="outlined"
                            value={formData.lastName}
                        />
                    </FormControl>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                    <FormControl fullWidth>
                        <TextField
                            label="User Name"
                            name="userName"
                            variant="outlined"
                            value={formData.userName}
                            {
                            ...register(
                                "userName",
                                {
                                    required: true,
                                    minLength: 5,
                                }
                            )
                            }
                        />
                        {errors.userName && <FormHelperText error="true">Please check the User Name</FormHelperText>}
                    </FormControl>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12 mb-3">
                    <FormControl fullWidth>
                        <TextField
                            type={"tel"}
                            label="Phone Number"
                            name="phone"
                            variant="outlined"
                            value={formData.phone}
                            required
                        />
                    </FormControl>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12 mb-3">
                    <FormControl fullWidth>
                        <TextField type={"email"} label="Email" name="email" variant="outlined" required />
                    </FormControl>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                    <FormControl
                        required
                        error={errorSkill}
                        variant="standard"
                        fullWidth
                    >
                        <FormLabel component="legend">Skills</FormLabel>
                        <FormGroup>
                            <Stack direction="row" flexWrap={"wrap"} >
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={html} onChange={handleChange} name="html" />
                                    }
                                    label="HTML"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={css} onChange={handleChange} name="css" />
                                    }
                                    label="CSS"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={react} onChange={handleChange} name="react" />
                                    }
                                    label="React"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={typescript} onChange={handleChange} name="typescript" />
                                    }
                                    label="Typescript"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={css3} onChange={handleChange} name="css3" />
                                    }
                                    label="CSS3"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={javascript} onChange={handleChange} name="javascript" />
                                    }
                                    label="Javascript"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={jquery} onChange={handleChange} name="jquery" />
                                    }
                                    label="JQuery"
                                />
                            </Stack>
                        </FormGroup>
                        {errorSkill && <FormHelperText>Please select atleast 2 skills</FormHelperText>}
                    </FormControl>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                    <FormControl
                        required
                        variant="standard"
                        fullWidth
                    >
                        <FormLabel component="legend" sx={{ mb: 3 }}>Total Experience</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <Stack spacing={3} direction="row" >
                                <DatePicker
                                    className={"exp_datepicker"}
                                    label="From"
                                    value={fromValue}
                                    onChange={(newValue) => {
                                        setFromValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                    required
                                />
                                <DatePicker
                                    className={"exp_datepicker"}
                                    label="To"
                                    minDate={fromValue}
                                    value={toValue}
                                    onChange={(newValue) => {
                                        setToValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                    required
                                />
                            </Stack>
                        </LocalizationProvider>
                    </FormControl>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                    <FormControl fullWidth>
                        <TextField label="Description" variant="outlined" required multiline />
                    </FormControl>
                </div>
            </div>
            <Button
                variant="contained"
                size="large"
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
}

export default UserForm;
