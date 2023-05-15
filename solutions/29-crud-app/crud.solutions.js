const PRODUCTS_API_BASE_URL = "https://dummyjson.com/products";

const productForm = document.getElementById("productForm");
const productTableBody = document.getElementById("productTableBody");

const renderProduct = (product) => {
  console.log(product);

  if (Object.keys(product).length > 0) {
    const productRow = `
      <tr data-id="${product.id}">
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.description}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>${product.discountPercentage}</td>
        <td>${product.rating.toFixed(2)}</td>
        <td>${product.stock}</td>
        <td>${product.brand}</td>
        <td>${product.category}</td>
        <td>
          <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
        </td>
      </tr>
    `;
    productTableBody.insertAdjacentHTML("beforeend", productRow);
  }

  // Delete a product  show the students the query selector
  const deleteProductBtn = productTableBody.querySelector(
    `[data-id="${product.id}"] .delete-product-btn`
  );
  deleteProductBtn.addEventListener("click", () => {
    //delete works but the data comesback after refresh shrugs
    console.log(product.id);
    fetch(PRODUCTS_API_BASE_URL + "/" + product.id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedProduct) => {
        if (deletedProduct.isDeleted) {
          productTableBody.removeChild(deleteProductBtn.closest("tr"));
        }
      })
      .catch((error) => console.error(error));
  });
};

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(productForm);
  const productData = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: parseFloat(formData.get("price")),
    discountPercentage: parseFloat(formData.get("discountPercentage")),
    rating: parseFloat(formData.get("rating")),
    stock: parseInt(formData.get("stock"), 10),
    brand: formData.get("brand"),
    category: formData.get("category"),
  };

  fetch(PRODUCTS_API_BASE_URL + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  })
    .then((res) => res.json())
    .then((product) => {
      //console.log(products)
      renderProduct(product);
      productForm.reset();
    })
    .catch((error) => console.error(error));
});

fetch(PRODUCTS_API_BASE_URL)
  .then((res) => res.json())
  .then((products) => {
    products.products.forEach((product) => renderProduct(product));
  })
  .catch((error) => console.error(error));
