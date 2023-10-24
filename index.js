function submitData(uName,uMail){
return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${uName}`,
      email:`${uMail}`,
    }),
  })
  .then(function (response) {
    return response.json();
  })
  .then(data=>{
    const id=data.id;
    document.body.innerHTML=id;

  })
  .catch(function (error) {
    document.body.innerHTML=error.message;
  })
  
}
