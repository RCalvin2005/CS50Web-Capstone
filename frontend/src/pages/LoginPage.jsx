import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import { EditCalendar } from "@mui/icons-material";
import FormInput from "../components/FormInput";

function LoginPage() {
  const { loginUser } = useContext(AuthContext);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      name: "username",
      type: "text",
    },
    {
      name: "password",
      type: "password",
    },
  ];

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
          {inputs.map((input, index) => (
            <FormInput
              key={`input-${index}`}
              {...input}
              value={values[input.name]}
              onChange={(e) => {
                setValues({ ...values, [e.target.name]: e.target.value });
              }}
            />
          ))}

          <Button type="submit" variant="contained" sx={{ my: 3 }} fullWidth>
            Sign In
          </Button>
        </form>
      </Card>
    </Box>
  );
}

export default LoginPage;
