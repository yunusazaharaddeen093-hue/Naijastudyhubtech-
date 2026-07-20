exports.handler = async function(event, context) {
  // Health check / simple wrapper
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Create-payment function is reachable'})
  };
};