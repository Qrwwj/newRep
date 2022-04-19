const routeList = [
  {
    path: "/shop/shopList",
    name: "商品列表",
    children: [
      {
        path: "/shop/shopList",
        name: "商品列表",
        children: [],
      },
      {
        path: "/shop/shops",
        name: "商品列表",
        children: [],
      },
    ],
  },
];
export default routeList;
