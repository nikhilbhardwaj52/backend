
async function sendData() {
  const response = await fetch("http://localhost:4000/user", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'john', age: 30 })
  });

  const data = await response.text();
  console.log("Response from server:", data);
}

sendData();
