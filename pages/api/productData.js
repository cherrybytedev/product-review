export let pagination = async (limit, offset, search) => {
  let index = offset
  if (offset !== 0) {
      index = limit * offset
  }
  console.log(index, limit)
  let products = [
      {
          pid: 1,
          name: "Wireless Bluetooth Hand Free ",
          price: 345,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 2,
          name: "Camera",
          price: 211,
          img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
          pid: 3,
          name: "Wireless Bluetooth Hand Free ",
          price: 211,
          img: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
          pid: 4,
          name: "Apple Watch ip14",
          price: 211,
          img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
          pid: 5,
          name: "Wireless Bluetooth Handphone Pink",
          price: 211,
          img: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
          pid: 6,
          name: "Wireless Bluetooth Mouse",
          price: 211,
          img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
          pid: 7,
          name: "Wireless Bluetooth Free ",
          price: 211,
          img: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
          pid: 8,
          name: "Wireless Bluetoo",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 9,
          name: "Wireless Bluetooth Free ",
          price: 345,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 10,
          name: "Wireless Handphone Red",
          price: 211,
          img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
          pid: 11,
          name: "Wireless Bluetooth Hand Free ",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 12,
          name: "Apple Watch ip14",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 13,
          name: "Wireless Bluetooth Handphone Pink",
          price: 211,
          img: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
          pid: 14,
          name: "Wireless Bluetooth Mouse",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 15,
          name: "Wireless B Hand Free ",
          price: 211,
          img: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
          pid: 16,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 17,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 18,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 19,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 20,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 21,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 22,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 23,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 24,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 25,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 26,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 27,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 28,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 29,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
      {
          pid: 30,
          name: "Wireless Bluetooth HandPhones",
          price: 211,
          img: "https://ianknaggs.com/wp-content/uploads/2019/09/Product-Food-Photography-Tartan-Shortbread-Biscuits-Ian-Knaggs-1200x1200.jpg",
      },
  ];
  let paginatedProducts = []
  for (let i = index; i < index + limit; i++) {
      paginatedProducts.push(products[i]);
  }
  return paginatedProducts
}
