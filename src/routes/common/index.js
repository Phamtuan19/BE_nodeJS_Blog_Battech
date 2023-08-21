import addressRoutue from "./address.route";
import articleTypeRoute from "./articleType.route";
import jobRoute from "./job.route";
import postRoute from "./post.route";
import workGroupRoute from "./workGroup.route";

const commonRoute = {
   prefix: '/',
   routes: [
      {
         path: 'articleType',
         route: articleTypeRoute,
      },
      {
         path: 'posts',
         route: postRoute,
      },
      {
         path: 'job',
         route: jobRoute,
      },
      {
         path: 'workGroup',
         route: workGroupRoute,
      },
      {
         path: 'address',
         route: addressRoutue,
      },

   ],
};

export default commonRoute;
