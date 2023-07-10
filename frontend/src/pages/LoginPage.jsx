import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Box, Button, Card, TextField } from "@mui/material";

function LoginPage() {
  const { loginUser } = useContext(AuthContext);

  return (
    <Box display="flex" justifyContent="center">
      <Card
        sx={{
          maxWidth: { xs: 350, sm: 400 },
          padding: { xs: "30px 25px", sm: "30px 40px" },
        }}
        elevation={3}
      >
        <form onSubmit={loginUser}>
          <TextField
            name="username"
            label="Username"
            placeholder="Enter Username"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <Button type="submit" variant="contained" sx={{ mt: 1 }} fullWidth>
            Sign In
          </Button>
        </form>
      </Card>
    </Box>
  );
}

export default LoginPage;
