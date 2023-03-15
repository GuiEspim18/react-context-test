import { Fragment, useContext } from "react";
import { LoginContext } from "../../shared/common/context/Login/Login.context";

const Home: Function = (): any => {
    const { name } = useContext(LoginContext);

    return (
        <Fragment>
            <section>
                <h1>Olá {name}</h1>
            </section>
        </Fragment>
    );
}

export default Home;