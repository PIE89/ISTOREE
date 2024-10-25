import emailjs from "@emailjs/browser";

export const sendingForm = (order) => {
  emailjs
    .send(
      "service_ndyd9nf",
      "template_yihjunf",
      {
        email_from: order.email,
        name: order.name,
        message: order.information,
        count: order.totalCount,
        price: order.totalAmount,
      },
      {
        publicKey: "gy0IuSFpzinCsYeL5",
      }
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};
