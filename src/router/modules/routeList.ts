const routeList = [
  {
    path: "",
    title: "Navigator One",
    isDisabled: false,
    children: [
      {
        path: "/index_page",
        title: "item one",
        isDisabled: false,
        children: [],
      },
      {
        path: "/1-2",
        title: "item two",
        isDisabled: false,
        children: [],
      },
      {
        path: "/1-3",
        title: "item three",
        isDisabled: false,
        children: [
          {
            path: "/1-3-1",
            title: "item 1-3-1",
            isDisabled: false,
            children: [],
          },
          {
            path: "/1-3-2",
            title: "item 1-3-2",
            isDisabled: false,
            children: [],
          },
        ],
      },
      {
        path: "/1-4",
        title: "item four",
        isDisabled: false,
        children: [
          {
            path: "/1-4-1",
            title: "item 1-4-1",
            isDisabled: false,
            children: [],
          },
          {
            path: "/1-4-2",
            title: "item 1-4-2",
            isDisabled: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    path: "/shoppingPage",
    title: "Navigator Two",
    isDisabled: false,
    children: [],
  },
  {
    path: "/asd",
    title: "Navigator Three",
    isDisabled: false,
    children: [],
  },
];

export { routeList };
