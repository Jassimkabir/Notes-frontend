export const getUser = async () => {
  return await fetch(
    `${process.env.REACT_APP_EXPRESS_URL}/auth/login/success`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    }
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  });
};
