export default (req, res, next) => {
  const send = res.send;

  res.send = (data) => {
    let newBody = data

    if (typeof data === 'object' && data !== null) {
      console.log('Body modified', data);
      newBody = {
        version: '1.0.0',
        date: (new Date()).toISOString(),
        message: 'Everything is fine',
        body: data,
      }
    }

    console.log('New body', typeof data, newBody);

    send.call(res, newBody);
  };

  next();
};
