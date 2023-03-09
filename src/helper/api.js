const makePostRequest = (url, details) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  }).then((response) => response.json());
};

export const sendNotification = async (text) => {
  const endpoint = `https://api.telegram.org/bot6115755657:AAGll8TJzCHV7XMnFqGoB026AL3DOlBdqkM/sendMessage`;
  await makePostRequest(endpoint, {
    text,
    chat_id: "5919819958",
  });
};
