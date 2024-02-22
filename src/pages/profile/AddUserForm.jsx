import React from "react";
import {
  TextField,
  Button,
  Container,
  Stack,
  useTheme,
  Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ScreenHeader from "../shared/ScreenHeader";
import { tokens } from "../../theme";
import { LockClock } from "@mui/icons-material";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Please Enter a valid phone number")
    .required("Contact is required"),
  address: yup.string().required("Address is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Must be at least 18 years old"),
});

const AddUserForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert(`User created`);
  };

  return (
    <>
      <ScreenHeader
        screenTitle={"Profile adding"}
        screenSubtitle={"Add a new user to your board"}
      />
      <Container
        maxWidth="100%"
        sx={{
          marginTop: 4,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction={"column"} spacing={4}>
            <Stack direction={"row"} spacing={3}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    color="secondary"
                    InputLabelProps={{
                      style: { color: `${colors.greenAccent[100]}` },
                    }}
                    InputProps={{
                      style: { borderColor: `${colors.greenAccent[700]}` },
                    }}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                    InputLabelProps={{
                      style: { color: `${colors.greenAccent[100]}` },
                    }}
                  />
                )}
              />
            </Stack>
            <div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputLabelProps={{
                      style: { color: `${colors.greenAccent[100]}` },
                    }}
                    InputProps={{
                      style: { borderColor: `${colors.greenAccent[100]}` },
                    }}
                  />
                )}
              />
            </div>{" "}
            <div>
              <Controller
                name="contact"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Contact"
                    variant="outlined"
                    fullWidth
                    type="tel"
                    color="secondary"
                    error={!!errors.contact}
                    helperText={errors.contact?.message}
                    InputLabelProps={{
                      style: { color: `${colors.greenAccent[100]}` },
                    }}
                    InputProps={{
                      style: { borderColor: `${colors.greenAccent[100]}` },
                      focused: { borderColor: `${colors.greenAccent[100]}` },
                    }}
                  />
                )}
              />
            </div>{" "}
            <div>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Address"
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    error={!!errors.address}
                    helperText={errors.address?.message}
                    InputLabelProps={{
                      style: { color: `${colors.greenAccent[100]}` },
                    }}
                    InputProps={{
                      style: { borderColor: `${colors.greenAccent[100]}` },
                      focused: { borderColor: `${colors.greenAccent[100]}` },
                    }}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="age"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Age"
                    variant="outlined"
                    fullWidth
                    type="text"
                    color="secondary"
                    error={!!errors.age}
                    helperText={errors.age?.message}
                    InputLabelProps={{
                      style: { color: `${colors.greenAccent[100]}` },
                    }}
                    InputProps={{
                      endAdornment: <LockClock />,
                      style: { borderColor: `${colors.greenAccent[700]}` },
                      // Remove end icon
                    }}
                  />
                )}
              />
            </div>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ marginTop: "1rem" }}
                sx={{ width: "150px" }}
              >
                Create Profile
              </Button>
            </Box>
          </Stack>
        </form>
      </Container>
    </>
  );
};

export default AddUserForm;
