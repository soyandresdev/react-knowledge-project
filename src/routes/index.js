import { generateParamUrl } from '@Config/utils/helpers';
// [START] Routes Endpoints Importing
import CoursesRoutes from './courses';

const routesEndpoints = {
  Courses: CoursesRoutes,
};
// [END] Routes Endpoints Importing

// API Base URL
export const BASE_API_URL = 'https://api.courses.test.cebroker.com'; // TODO: Read from environment variable

// Get a page route
export const getPageRoute = (module, endpoint, params) => {
  const endpointUrl = routesEndpoints?.[module]?.pageRoutes?.[endpoint];
  return `${generateParamUrl(endpointUrl, params)}`;
};

// Get an api route
export const getApiRoute = (module, endpoint, params) => {
  const endpointUrl = routesEndpoints?.[module]?.apiRoutes?.[endpoint];
  return `${BASE_API_URL}${generateParamUrl(endpointUrl, params)}`;
};
