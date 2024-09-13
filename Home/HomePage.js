var listProduct = [];
$(function () {
   loadComponent();

   //   Thực hiện Delay quá trình load dữ liệu DS sản phẩm để đợi các thành phần trang web load hoàn chỉnh
   setTimeout(() => {
      featchListProduct();
   }, 200);
});

// Load các thành phần của trang Home Page
function loadComponent(params) {
   $(".MenuSection").load("./Menu.html");
   $(".BannerSection").load("./Banner.html");
   $(".ProductsSection").load("./Products.html");
   $(".FooterSection").load("./Footer.html");
}

// Hàm lấy dữ liệu, Generate các sản phẩm
function featchListProduct(params) {
   $.ajax({
      type: "GET",
      url: "http://localhost:3000/products",
      success: function (ketQuaTraVe) {
         
         var contentHtml = "";
         for (var i = 0; i < ketQuaTraVe.length; i++){
            var sanPham = ketQuaTraVe[i];
            contentHtml = contentHtml + `<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: left">
         <!-- Ảnh  -->
         <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <img src="${sanPham.imageName}" alt="" style="width: 160px; height: 190px" />
            </div>
         </div>
         <!-- Tên sản phẩm  -->
         <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <h3 style="font-weight: bold">${sanPham.name}</h3>
            </div>
         </div>

         <!-- Hãng sản xuất -->
         <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <h4>Hãng sản xuất: ${sanPham.manufacturerId}</h4>
            </div>
         </div>

         <!-- Đánh giá  -->
         <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <ul class="rating" style="
                  list-style: none;
                  display: flex;
                  font-size: 20px;
                  padding-inline-start: 0px;
               ">
                  <li>
                     <i class="fa fa-star selected" style="color: orange"></i>
                  </li>
                  <li>
                     <i class="fa fa-star selected" style="color: orange"></i>
                  </li>
                  <li>
                     <i class="fa fa-star selected" style="color: orange"></i>
                  </li>
                  <li>
                     <i class="fa fa-star"></i>
                  </li>
                  <li>
                     <i class="fa fa-star"></i>
                  </li>
               </ul>
            </div>
         </div>

         <!-- Thêm vào giỏ hàng  -->
         <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-4">
               <h4>${sanPham.price}₫</h4>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <button type="button" class="btn btn-default" style="border: 0px">
                  <i class="fa fa-shopping-cart" style="color: red; font-size: 35px"></i>
               </button>
            </div>
         </div>

         <br />
         <br />
         <br />
      </div>`
         }

         document.getElementById("ProductList").innerHTML=contentHtml
      //    for (var i = 0; i < ketQuaTraVe.length; i++) {
      //       var sanPham = ketQuaTraVe[i];

      //       var string = `<div
      //    class="col-xs-3 col-sm-3 col-md-3 col-lg-3"
      //    style="text-align: left"
      // >
      //    <!-- Ảnh  -->
      //    <div class="row">
      //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //          <img
      //             src=${sanPham.imageName}
      //             alt=""
      //             style="width: 160px; height: 190px"
      //          />
      //       </div>
      //    </div>
      //    <!-- Tên sản phẩm  -->
      //    <div class="row">
      //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //          <h3 style="font-weight: bold">${sanPham.name}</h3>
      //       </div>
      //    </div>

      //    <!-- Hãng sản xuất -->
      //    <div class="row">
      //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //          <h4>Hãng sản xuất: ${sanPham.manufacturerId}</h4>
      //       </div>
      //    </div>

      //    <!-- Đánh giá  -->
      //    <div class="row">
      //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //          <ul
      //             class="rating"
      //             style="
      //                list-style: none;
      //                display: flex;
      //                font-size: 20px;
      //                padding-inline-start: 0px;
      //             "
      //          >
      //             <li>
      //                <i
      //                   class="fa fa-star selected"
      //                   style="color: orange"
      //                ></i>
      //             </li>
      //             <li>
      //                <i
      //                   class="fa fa-star selected"
      //                   style="color: orange"
      //                ></i>
      //             </li>
      //             <li>
      //                <i
      //                   class="fa fa-star selected"
      //                   style="color: orange"
      //                ></i>
      //             </li>
      //             <li>
      //                <i class="fa fa-star"></i>
      //             </li>
      //             <li>
      //                <i class="fa fa-star"></i>
      //             </li>
      //          </ul>
      //       </div>
      //    </div>

      //    <!-- Thêm vào giỏ hàng  -->
      //    <div class="row">
      //       <div class="col-sm-4 col-md-4 col-lg-4">
      //          <h4>${sanPham.price}₫</h4>
      //       </div>

      //       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      //          <button
      //             type="button"
      //             class="btn btn-default"
      //             style="border: 0px"
      //          >
      //             <i
      //                class="fa fa-shopping-cart"
      //                style="color: red; font-size: 35px"
      //             ></i>
      //          </button>
      //       </div>
      //    </div>

      //    <br />
      //    <br />
      //    <br />
      // </div>`;
      //       contentHtml += string;
      //    }
      //    document.getElementById("ProductList").innerHTML = contentHtml;
      },
   });

   // Reset lại listProduct về Null
   listProduct = [];
   //Lấy dữ liệu từ LocalStorage để sử dụng
   // Kiểm tra xem có dữ liệu dưới LocalStorage không
   // if (localStorage && localStorage.getItem("listProduct")) {
   //   var listProductLocalStorage = JSON.parse(localStorage.getItem("listProduct"));
   // Lưu dữ liệu từ localStorage vào listProduct trong JS để sử dụng
   //   listProduct = listProductLocalStorage;
   // }
   // Thực hiện Call API
   // $.ajax({
   //   type: "GET",
   //   url: "http://localhost:8080/api/v1/products",
   //   // data: "data",
   //   dataType: "json",
   //   success: function (response, status) {
   //     // console.log("response:", response);
   //     // console.log("status:", status);

   //     // Kiểm tra nếu status= success
   //     if (status === "success") {
   //       listProduct = response;
   //       for (let index = 0; index < listProduct.length; index++) {
   //         $(".ProductList").append(`
   //         <!-- SP 1 -->
   //         <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: left; width: 300px; height: 500px">
   //           <!-- Ảnh -->
   //           <div class="row">
   //             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   //               <img src="../Asset/Product/${listProduct[index].imageName}" alt="" style="width: 190px; height: 190px" />
   //             </div>
   //           </div>
   //           <!-- Tên sản phẩm -->
   //           <div class="row">
   //             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   //               <h3 style="font-weight: bold">${listProduct[index].name}</h3>
   //             </div>
   //           </div>
   //           <!-- Hãng sản xuất -->
   //           <div class="row">
   //             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   //               <h4>Hãng sản xuất: ${listProduct[index].manufacturerName}</h4>
   //             </div>
   //           </div>
   //           <!-- Đánh giá -->
   //           <div class="row">
   //             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   //               <ul class="rating" style="list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px">

   //                 ${showStarRating(listProduct[index].ratingStar)}
   //               </ul>
   //             </div>
   //           </div>
   //           <!-- Thêm vào giỏ hàng -->
   //           <div class="row">
   //             <div class="col-sm-4 col-md-4 col-lg-4">
   //               <h4>${listProduct[index].price}</h4>
   //             </div>

   //             <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
   //               <button type="button" class="btn btn-default" style="border: 0px">
   //                 <i class="fa fa-shopping-cart" style="color: red; font-size: 35px"></i>
   //               </button>
   //             </div>
   //           </div>
   //           <br />
   //           <br />
   //           <br />
   //         </div>
   //         <!-- Finish SP 1 -->
   //         `);
   //       }
   //     } else {
   //       console.log("Error when loading data!!");
   //       return;
   //     }
   //   },
   // });
   //
   // for (let index = 0; index < listProduct.length; index++) {
   //   $(".ProductList").append(`
   //   <!-- SP 1 -->
   //   <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: left; width: 300px; height: 500px">
   //     <!-- Ảnh -->
   //     <div class="row">
   //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   //         <img src="../Asset/Product/${listProduct[index].imageName}" alt="" style="width: 190px; height: 190px" />
   //       </div>
   //     </div>
   //     <!-- Tên sản phẩm -->
   //     <div class="row">
   //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   //         <h3 style="font-weight: bold">${listProduct[index].name}</h3>
   //       </div>
   //     </div>
   //     <!-- Hãng sản xuất -->
   //     <div class="row">
   //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   //         <h4>Hãng sản xuất: ${listProduct[index].manufacturerId}</h4>
   //       </div>
   //     </div>
   //     <!-- Đánh giá -->
   //     <div class="row">
   //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   //         <ul class="rating" style="list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px">

   //           ${showStarRating(listProduct[index].ratingStar)}
   //         </ul>
   //       </div>
   //     </div>
   //     <!-- Thêm vào giỏ hàng -->
   //     <div class="row">
   //       <div class="col-sm-4 col-md-4 col-lg-4">
   //         <h4>${listProduct[index].price}</h4>
   //       </div>

   //       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
   //         <button type="button" class="btn btn-default" style="border: 0px">
   //           <i class="fa fa-shopping-cart" style="color: red; font-size: 35px"></i>
   //         </button>
   //       </div>
   //     </div>
   //     <br />
   //     <br />
   //     <br />
   //   </div>
   //   <!-- Finish SP 1 -->
   //   `);
   // }
}

// Hàm hiển thị số sao đánh giá
function showStarRating(ratingStar) {
   // Khai báo mảng
   let starRating = "";
   // Hiển thị đánh giá có Sao
   for (let index = 1; index <= ratingStar; index++) {
      starRating += `
      <li>
         <i class="fa fa-star selected" style="color: orange"></i>
      </li>`;
   }
   // Hiển thị các Sao không được đánh gía
   for (let index = 1; index <= 5 - ratingStar; index++) {
      starRating += `
    <li>
       <i class="fa fa-star"></i>
    </li>`;
   }
   //
   return starRating;
}

function addProduct() {
   var newProduct = {
      id: 50,
      name: "154545645674567457456745674575686",
      info: "High-performance laptop with Apple M3 chip",
      detail:
         "The MacBook Pro with M1 chip delivers incredible performance and battery life for professionals.",
      price: 14990,
      imageName: "https://images.unsplash.com/photo-1504006833117-8886a355efbf",
      ratingStar: 4.9,
      manufacturerId: 1,
      categoryId: 3,
   };

   $.ajax({
      type: "POST",
      url: "http://localhost:3000/products",
      data: JSON.stringify(newProduct),
      success: function (response) {
         console.log("🚀 ~ addProduct ~ response:", response);
      },
      error: function (error) {
         console.error("�� ~ addProduct ~ error:", error);
      },
   });
}

function editProduct() {
   var newProduct = {
      id: 2,
      name: "Samsung Galaxy S100",
      info: "Samsung's flagship smartphone with advanced features",
      detail:
         "Galaxy S23 offers a stunning display, powerful processor, and versatile camera setup.",
      price: 30000,
      imageName: "https://images.unsplash.com/photo-1580910051076-e6a79d36c23f",
      ratingStar: 4.6,
      manufacturerId: 2,
      categoryId: 1,
   };

   $.ajax({
      type: "PATCH",
      url: `http://localhost:3000/products/${newProduct.id}`,
      data: JSON.stringify(newProduct),
      success: function (response) {
         console.log("🚀 ~ editProduct ~ response:", response);
      },
   });
}

function deleteProduct() {
   var newProduct = {
      id: 4,
      name: "154545645674567457456745674575686",
      info: "High-performance laptop with Apple M3 chip",
      detail:
         "The MacBook Pro with M1 chip delivers incredible performance and battery life for professionals.",
      price: 14990,
      imageName: "https://images.unsplash.com/photo-1504006833117-8886a355efbf",
      ratingStar: 4.9,
      manufacturerId: 1,
      categoryId: 3,
   };

   $.ajax({
      type: "DELETE",
      url: `http://localhost:3000/products/${newProduct.id}`,
      success: function (response) {
         console.log("🚀 ~ deleteProduct ~ response:", response);
      },
   });
}
