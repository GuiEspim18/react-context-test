import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { routes } from "./app/utils/mocs/routes/routes.moc";

const Routes: Function = (): any => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" element={<Navigate to="/login"/>} />
        {routes.map((element: any) => <Route key={element.path} path={element.path} element={element.component} />)}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
