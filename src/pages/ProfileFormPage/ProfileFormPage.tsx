import {
  Alert,
  Button,
  MenuItem,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const data = [
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function ProfileFormPage() {
  //handle alert
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    _?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //handle form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () => {
    reset();
    handleClick();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 3, width: "95%" }}
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        <TextField
          label="First Name"
          {...register("firstName", { required: true, minLength: 3 })}
          error={errors.firstName ? true : false}
          helperText={
            errors.firstName?.type === "required"
              ? "This field is required"
              : errors.firstName?.type === "minLength"
                ? "Must be at least 3 characters"
                : null
          }
          variant="filled"
          sx={{ flex: 1 }}
        />
        <TextField
          label="Last Name"
          {...register("lastName", { required: true, minLength: 3 })}
          error={errors.lastName ? true : false}
          helperText={
            errors.lastName?.type === "required"
              ? "This field is required"
              : errors.lastName?.type === "minLength"
                ? "Must be at least 3 characters"
                : null
          }
          variant="filled"
          sx={{ flex: 1 }}
        />
      </Box>
      <TextField
        label="Email"
        variant="filled"
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        error={errors.email ? true : false}
        helperText={
          errors.email?.type === "required"
            ? "Email address is required"
            : errors.email?.type === "pattern"
              ? "email is not valid"
              : null
        }
      />
      <TextField
        label="Contact Number"
        variant="filled"
        {...register("phone", {
          required: true,
          pattern:
            /^(\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        })}
        error={errors.phone ? true : false}
        helperText={
          errors.phone?.type === "required"
            ? "This field is required"
            : errors.phone?.type === "pattern"
              ? "phone is not valid"
              : null
        }
      />
      <TextField label="Country" variant="filled" />
      <TextField label="City" variant="filled" />
      <TextField
        select
        label="Role"
        defaultValue="User"
        variant="filled"
        sx={{ textAlign: "left" }}
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          type="submit"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            color="info"
            sx={{ width: "100%" }}
          >
            Account Created Successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
