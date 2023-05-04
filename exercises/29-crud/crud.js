!(function () {
  /**
   * You will be using the Dummy Product API. You can find the documentation here:
   * @see https://dummyjson.com/docs/products
   *
   * You will be building a Create Update Read Delete (CRUD) application.
   * You will need to make three AJAX requests using the Dummy Product API.
   *
   * 1. Make an AJAX request to get a list of products.
   *    Display the list of products in the table below.
   *    See the sample table row HTML below.
   *    Each row must have a "Delete" button.
   *
   * 2. When the user clicks on a "Delete" button,
   *    it should make an AJAX request to delete the product.
   *
   * 3. When the user fills out and submits the "Add Product" form,
   *    send an AJAX request to add the new product.
   *
   * You can use Axios if you like to solve this problem. (You will need to get the library from a CDN.)
   * You can choose to use promise or async and await.
   *
   * HINT: You might want to embed the product ID somewhere in the HTML
   * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
   *
   * Sample table row HTML:
   * @example
   * <tr>
   *   <td>1</td>
   *   <td>iPhone 9</td>
   *   <td>An apple mobile which is nothing like apple</td>
   *   <td>$549.00</td>
   *   <td>12.96</td>
   *   <td>4.69</td>
   *   <td>94</td>
   *   <td>Apple</td>
   *   <td>smartphones</td>
   *   <td>
   *     <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
   *   </td>
   * </tr>
   */

  let products = [];

  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const product = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      price: document.querySelector("#price").value,
      discountPercentage: document.querySelector("#discountPercentage").value,
      rating: document.querySelector("#rating").value,
      stock: document.querySelector("#stock").value,
      brand: document.querySelector("#brand").value,
      category: document.querySelector("#category").value,
    };
    // add product to backend
    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await res.json();
      console.log(data, "data");
      product.id = data.id;
    } catch (error) {
      console.error(error);
    }
    products.push(product);
    // if the post was successful display it to the frontend
    renderProducts(products);
    console.log(products);
  });

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      // push products to local array
      data.products.forEach((product) => {
        products.push(product);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e) => {
    const id = e.target.dataset.prodID;

    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
    } catch (error) {
      console.error(error);
    }
    // if request succeded remove from frontend

    products = products.filter((prod) => {
      return prod.id !== parseInt(id);
    });

    renderProducts(products);
  };

  const renderProducts = (products) => {
    const table = document.querySelector("#productTableBody");
    // remove existing products
    while (table.firstChild) {
      table.removeChild(table.lastChild);
    }

    products.forEach((product) => {
      const tr = document.createElement("tr");
      const title = document.createElement("td");
      const id = document.createElement("td");
      const description = document.createElement("td");
      const price = document.createElement("td");
      const discount = document.createElement("td");
      const rating = document.createElement("td");
      const stock = document.createElement("td");
      const brand = document.createElement("td");
      const category = document.createElement("td");
      const deleteBtn = document.createElement("button");

      id.textContent = product.id;
      title.textContent = product.title;
      description.textContent = product.description;
      price.textContent = product.price;
      discount.textContent = product.discountPercentage;
      rating.textContent = product.rating;
      stock.textContent = product.stock;
      brand.textContent = product.brand;
      category.textContent = product.category;
      deleteBtn.textContnet = "Delete";
      deleteBtn.dataset.prodID = product.id;
      deleteBtn.classList.add(
        "btn",
        "btn-danger",
        "btn-xl",
        "delete-product-btn"
      );

      table.appendChild(tr);
      tr.appendChild(id);
      tr.appendChild(title);
      tr.appendChild(description);
      tr.appendChild(price);
      tr.appendChild(discount);
      tr.appendChild(rating);
      tr.appendChild(stock);
      tr.appendChild(brand);
      tr.appendChild(category);
      tr.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", handleDelete);
    });
  };
  // fetch products from api then render them
  getProducts().then(() => {
    renderProducts(products);
  });
})();
