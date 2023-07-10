import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { EditCalendar, Visibility, VisibilityOff } from "@mui/icons-material";

function LoginPage() {
  const { loginUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box display="flex" justifyContent="center" mt={{ xs: 12, sm: 6 }}>
      <Card
        sx={{
          maxWidth: { xs: 335, sm: 400 },
          padding: { xs: "30px 25px", sm: "30px 40px" },
        }}
        elevation={3}
      >
        <Box display="flex" justifyContent="center" gap={1} py={2}>
          <Typography component="h2" variant="h4" align="center">
            Course Planner
          </Typography>
          <EditCalendar fontSize="large" />
        </Box>

        <Divider />

        <Typography
          component="h3"
          variant="h5"
          fontWeight={500}
          align="center"
          sx={{ mt: 3, mb: 1 }}
        >
          Login
        </Typography>

        <form onSubmit={loginUser}>
          <TextField
            name="username"
            label="Username"
            placeholder="Enter Username"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <FormControl variant="outlined" margin="normal" fullWidth>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <OutlinedInput
              name="password"
              id="password-input"
              placeholder="Enter Password"
              label="Password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button type="submit" variant="contained" sx={{ my: 3 }} fullWidth>
            Sign In
          </Button>
        </form>
      </Card>
    </Box>
  );
}

export default LoginPage;
