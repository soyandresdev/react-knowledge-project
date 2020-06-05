// const moduleURL = '/Courses';

const apiRoutes = Object.freeze({
  GET_COURSES_FEATURED:
    '/offerings?expand=totalItems&pageIndex=:pagesIndex&pageSize=:pageSize&sortField=:sortField&profession=:profession&state=:state&courseType=:courseType&term=:term&isFeatured=true',
  GET_COURSES:
    '/offerings?expand=totalItems&pageIndex=:pagesIndex&pageSize=:pageSize&sortField=:sortField&profession=:profession&state=:state&courseType=:courseType&term=:term',
});

const pageRoutes = Object.freeze({});

export default { apiRoutes, pageRoutes };
