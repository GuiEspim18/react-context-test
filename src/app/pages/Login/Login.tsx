import { TextField } from "@mui/material";
import {
  StyledButton,
  StyledCard,
  StyledContainer,
} from "../../../assets/css/Global/Global";

const Login: Function = (): any => {
  return (
    <StyledContainer>
      <StyledCard sx={{ maxWidth: "50%" }}>
        <div>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <StyledButton>Submit</StyledButton>
        </div>
      </StyledCard>
    </StyledContainer>
  );
};

export default Login;
