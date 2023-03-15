import { useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  H2,
  StyledButton,
  StyledCard,
  StyledContainer,
  InputContainer
} from "../../../assets/css/Global/Global";
import { LoginContext } from "../../shared/common/context/Login/Login.context";

const Login: Function = (): any => {
  const {name, setName} = useContext(LoginContext);
  const navigate: NavigateFunction = useNavigate();

  const submit: VoidFunction = (): void => {
    if (name!==undefined && name.length > 0) {
      navigate("/home")
    } 
  }

  return (
    <StyledContainer>
      <StyledCard sx={{ maxWidth: "50%" }}>
        <div>
          <H2>Login</H2>
          <InputContainer label="Name" value={name} onChange={(event: any) => setName(event.target.value)} />
          <StyledButton variant="contained" onClick={submit}>Submit</StyledButton>
        </div>
      </StyledCard>
    </StyledContainer>
  );
};

export default Login;
