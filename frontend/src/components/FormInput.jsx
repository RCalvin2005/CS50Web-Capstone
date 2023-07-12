import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

function FormInput(props) {
  const { type, name, ...stateProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  function titleCase(text) {
    // https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-title-case-text
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  // Create input props
  const inputProps = {
    name: name,
    id: `${name}-input`,
    label: titleCase(name),
    placeholder: `Enter ${titleCase(name)}`,
  };

  if (type === "password") {
    return (
      <FormControl variant="outlined" margin="normal" fullWidth>
        <InputLabel htmlFor={inputProps.id}>{inputProps.label}</InputLabel>
        <OutlinedInput
          {...inputProps}
          {...stateProps}
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
    );
  }

  return (
    <TextField
      {...inputProps}
      {...stateProps}
      type={type}
      variant="outlined"
      margin="normal"
      fullWidth
    />
  );
}

export default FormInput;
