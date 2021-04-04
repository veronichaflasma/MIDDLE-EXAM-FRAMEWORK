import {FETCH_CART, ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const fetchCart = () => (dispatch) => {
  fetch("http://localhost:8001/keranjang")
    .then((res) => res.json())
    .catch((err) =>
      fetch("keranjang.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: FETCH_CART, payload: data });
    });
};

export const handleMinus = (items,product) => (dispatch) => {
  let url ="http://localhost:8001/keranjang/"+product.id;
  let method = "PUT";
  const cartItems = items.slice();
  product.count--
  let insertProduct = {
    id : product.id,
    title :product.title,
    category : product.category,
    description : product.description,
    price: product.price,
    img:product.img,
    total_qty:product.price * product.count,
    count: product.count
  }

  fetch(url, {
    method: method,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(insertProduct)
  }).then(response => {
      console.log("scc",response)
  }).catch(response => {
      console.log("err",response)
  })
  
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({ type: ADD_TO_CART, payload: { cartItems } });

}

export const handlePlus = (items,product) => (dispatch) => {
  let url ="http://localhost:8001/keranjang/"+product.id;
  let method = "PUT";
  const cartItems = items.slice();
  product.count++
  let insertProduct = {
    id : product.id,
    title :product.title,
    category : product.category,
    description : product.description,
    price: product.price,
    img:product.img,
    total_qty:product.price * product.count,
    count: product.count
  }

  fetch(url, {
    method: method,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(insertProduct)
  }).then(response => {
      console.log("scc",response)
  }).catch(response => {
      console.log("err",response)
  })
  
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({ type: ADD_TO_CART, payload: { cartItems } });

}

export const addToCart = (items, product) => (dispatch) => {
  // console.log(product)
  let url ="http://localhost:8001/keranjang/";
  let method = "POST";
  const cartItems = items.slice();
  let productAlreadyInCart = false;
  let insertProduct = {
    id : product.id,
    title :product.title,
    category : product.category,
    description : product.description,
    price: product.price,
    img:product.img,
    total_qty:product.total_qty,
    count:1
  }

  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      insertProduct.id = cp.id;
      insertProduct.title = cp.title;
      insertProduct.category = cp.category;
      insertProduct.description = cp.description;
      insertProduct.price = cp.price;
      insertProduct.img = cp.img;

      cp.count++;
      insertProduct.total_qty = cp.price * cp.count;
      console.log(cp.count)
      insertProduct.count = cp.count;
      productAlreadyInCart = true;
      method = "PUT";
      url += insertProduct.id;
    } 
  });
  console.log(insertProduct,productAlreadyInCart)
    fetch(url, {
      method: method,
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(insertProduct)
    }).then(response => {
      console.log("scc",response)
  }).catch(response => {
      console.log("err",response)
  })


  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({ type: ADD_TO_CART, payload: { cartItems } });
}

export const removeFromCart = (items, product) => (dispatch) => {

  // let url ="http://localhost:8001/keranjang/"+product.id;
  // let method = "DELETE";
  // const cartItems = items.slice();
  // let insertProduct = {
  //   id : product.id,
  //   title :product.title,
  //   category : product.category,
  //   description : product.description,
  //   price: product.price,
  //   img:product.img,
  //   total_qty:product.total_qty,
  //   count: product.count
  // }

  // fetch(url, {
  //   method: method,
  //   headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(insertProduct)
  // }).then(response => {
  //     console.log("scc",response)
  // }).catch(response => {
  //     console.log("err",response)
  // })
  
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // return dispatch({ type: ADD_TO_CART, payload: { cartItems } });

  const cartItems = items.slice().filter((a) => a.id !== product.id);
  fetch("http://localhost:8001/keranjang/"+product.id, {
    method: "DELETE",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify()
  }).then(response => {
      console.log("scc",response)
  }).catch(response => {
      console.log("err",response)
  })
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
