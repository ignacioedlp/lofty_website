const routeAdminAccess = (token) => {
  if (token != '') {
    return {
      props: {
        isLogged: true,
      },
    };
  } else {
    return {
      props: {
        isLogged: false,
      },
    };
  }
};

const routeUserAccess = (token) => {
  if (token != '') {
    return {
      props: {
        isLogged: true,
      },
    };
  } else {
    return {
      props: {
        isLogged: false,
      },
    };
  }
};

export { routeAdminAccess, routeUserAccess };
