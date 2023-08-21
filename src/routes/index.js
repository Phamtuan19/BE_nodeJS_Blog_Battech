import authRoute from "./auth";
import commonRoute from "./common";


const routes = [{ ...commonRoute }, { ...authRoute }];


export default routes;