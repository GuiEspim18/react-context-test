import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { routes } from "./app/shared/mocs/routes/routes.moc";
import { LoginProvider } from "./app/shared/common/context/Login/Login.context"

const Routes: Function = (): any => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" element={<Navigate to="/login"/>} />
        {routes.map((element: any) => {
          if (element.path === "/home" || element.path === "/login") {
            return (
              <Route key={element.path} path={element.path} element={
                <LoginProvider>
                  {element.component}
                </LoginProvider>
              } />
            );
          }
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
