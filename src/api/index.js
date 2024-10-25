const fetchProducts = async (params = "") => {
  try {
    const response = await fetch(
      `https://pond-peridot-brownie.glitch.me/products` + params
    );
    if (!response.ok) console.log("Ошибка в запросе");
    const result = response.json();
    return result;
  } catch (error) {
    console.log("Ошибка с получением продуктов");
  }
};

const fetchProduct = async (id = "") => {
  try {
    const response = await fetch(
      `https://pond-peridot-brownie.glitch.me/products/` + id
    );
    if (!response.ok) console.log("Ошибка в запросе");
    const result = response.json();
    return result;
  } catch (error) {
    console.log("Ошибка с получением продуктов");
  }
};

const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://pond-peridot-brownie.glitch.me/categories"
    );
    if (!response.ok) console.log("Ошибка в запросе");
    const result = response.json();
    return result;
  } catch (error) {
    console.log("Ошибка с получением категорий");
  }
};

const fetchFilterValues = async () => {
  try {
    const response = await fetch(
      "https://pond-peridot-brownie.glitch.me/filterValues"
    );
    if (!response.ok) console.log("Ошибка в запросе");
    const result = response.json();
    return result;
  } catch (error) {
    console.log("Ошибка с получением значений фильтра");
  }
};

const createOrder = async (order) => {
  try {
    const response = await fetch(
      "https://pond-peridot-brownie.glitch.me/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );
    const result = response.json();
    return result;
  } catch (error) {
    console.log("Ошибка с отправкой формы");
  }
};

export {
  fetchProducts,
  fetchCategories,
  fetchFilterValues,
  fetchProduct,
  createOrder,
};
