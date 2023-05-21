export const consultation = async (url, method, body = {}) => {
  console.log("page mounted")
  let options = {};
  const data = { ...body };

  try {

    if (method === 'POST' || method === 'PUT') {

      options = {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
        },
      };
    }

    if (method === 'DELETE') {
      options = { method };
    }
    console.log("at request")
    const request = await fetch(url, options);

    if (request) {
      console.log("passed")
      return request.json();

    } else {
      throw new Error('Error al conectar con la api');
    }

  } catch (error) {
    throw new Error(`Error al conectar con la API: ${error.message}`);
  }
};