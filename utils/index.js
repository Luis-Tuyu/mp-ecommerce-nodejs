function createPreference() {
  //obtener los datos
  let orderData = {
    description: document.getElementById("product-description").innerText,
    unit_price: document.getElementById("unit-price").innerText,
    quantity: document.getElementById("quantity").innerText,
  };
  fetch("/api/payment/mercadopago/create_preference", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  }).then(function (response) {
    return response.json();
  }).then((preference)=>{
    createCheckoutButton(preference.id);

  });
}

function createCheckoutButton(preference) {
    let script = document.createElement("script");
    
    // The source domain must be completed according to the site for which you are integrating.
    // For example: for Argentina ".com.ar" or for Brazil ".com.br".
    script.src = "https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js";
    script.type = "text/javascript";
    script.dataset.preferenceId = preference;
    document.getElementById("button-checkout").innerHTML = "";
    document.querySelector("#button-checkout").appendChild(script);
  }