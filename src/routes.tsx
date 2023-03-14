import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { routes } from "./app/utils/mocs/routes/routes.moc";

const Routes: Function = (): any => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" element={<Navigate to="/login"/>} />
        {routes.map((element: any) => <Route path={element.path} element={element.element} />)}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
