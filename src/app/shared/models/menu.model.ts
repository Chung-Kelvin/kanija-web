export interface IMenuItem {
  label: string;
  icon?: string;
  route?: string;
  children?: IMenuItem[];
  permission?: string;
  expanded?: boolean;
  firstLevel?: boolean;
}

export const MENU_CONFIG: IMenuItem[] = [
  {
    label: 'Nữ',
    route: '/nu',
  },
  {
    label: 'Nam',
    route: '/nam',
  },
  {
    label: 'Bé gái',
    route: '/girl',
  },
  {
    label: 'Bé trai',
    route: '/boy',
  },
  {
    label: 'Sản phẩm mới',
    route: '/new-product',
  },
  {
    label: 'BTS Em ơi em à',
    route: '/bst-em-oi-em-a',
  },
  {
    label: 'Canifa s',
    route: '/canifa-s',
  },
];

export const MENU_CONFIG_ADMIN: IMenuItem[] = [
  {
    icon: 'category',
    label: 'Category',
    route: '/admin/category',
    firstLevel: true,
  },
  {
    icon: 'person',
    label: 'Sản phẩm',
    firstLevel: true,
    children: [
      {
        icon: 'face',
        label: 'Điện thoại',
        children: [
          {
            icon: 'groups',
            label: 'iPhone',
            route: '/products/iphone',
          },
          {
            icon: 'group',
            label: 'Samsung',
            route: '/products/samsung',
          },
        ],
      },
      {
        icon: 'group',
        label: 'Laptop',
        children: [
          {
            icon: 'group',
            label: 'MacBook',
            route: '/products/macbook',
          },
          {
            icon: 'group',
            label: 'Dell',
            route: '/products/dell',
          },
        ],
      },
    ],
  },
  {
    icon: 'mood',
    label: 'Face',
    route: '/home',
    firstLevel: true,
  },
  {
    icon: 'rainy',
    label: 'Thời tiết',
    firstLevel: true,
    children: [
      {
        icon: 'face',
        label: 'Điện thoại',
        children: [
          {
            icon: 'groups',
            label: 'iPhone',
            route: '/products/iphone',
          },
          {
            icon: 'group',
            label: 'Samsung',
            route: '/products/samsung',
          },
        ],
      },
      {
        icon: 'group',
        label: 'Laptop',
        children: [
          {
            icon: 'group',
            label: 'MacBook',
            route: '/products/macbook',
          },
          {
            icon: 'group',
            label: 'Dell',
            route: '/products/dell',
          },
        ],
      },
    ],
  },
  {
    icon: 'person',
    label: 'Sản phẩm',
    firstLevel: true,
    children: [
      {
        icon: 'face',
        label: 'Điện thoại',
        children: [
          {
            icon: 'groups',
            label: 'iPhone',
            route: '/products/iphone',
          },
          {
            icon: 'group',
            label: 'Samsung',
            route: '/products/samsung',
          },
        ],
      },
      {
        icon: 'group',
        label: 'Laptop',
        children: [
          {
            icon: 'group',
            label: 'MacBook',
            route: '/products/macbook',
          },
          {
            icon: 'group',
            label: 'Dell',
            route: '/products/dell',
          },
        ],
      },
    ],
  },
  {
    icon: 'person',
    label: 'Sản phẩm',
    firstLevel: true,
    children: [
      {
        icon: 'face',
        label: 'Điện thoại',
        children: [
          {
            icon: 'groups',
            label: 'iPhone',
            route: '/products/iphone',
          },
          {
            icon: 'group',
            label: 'Samsung',
            route: '/products/samsung',
          },
        ],
      },
      {
        icon: 'group',
        label: 'Laptop',
        children: [
          {
            icon: 'group',
            label: 'MacBook',
            route: '/products/macbook',
          },
          {
            icon: 'group',
            label: 'Dell',
            route: '/products/dell',
          },
        ],
      },
    ],
  },
  {
    icon: 'person',
    label: 'Sản phẩm',
    firstLevel: true,
    children: [
      {
        icon: 'face',
        label: 'Điện thoại',
        children: [
          {
            icon: 'groups',
            label: 'iPhone',
            route: '/products/iphone',
          },
          {
            icon: 'group',
            label: 'Samsung',
            route: '/products/samsung',
          },
        ],
      },
      {
        icon: 'group',
        label: 'Laptop',
        children: [
          {
            icon: 'group',
            label: 'MacBook',
            route: '/products/macbook',
          },
          {
            icon: 'group',
            label: 'Dell',
            route: '/products/dell',
          },
        ],
      },
    ],
  },
  {
    icon: 'woman_2',
    label: 'Sản phẩm',
    firstLevel: true,
    children: [
      {
        icon: 'face',
        label: 'Điện thoại',
        children: [
          {
            icon: 'groups',
            label: 'iPhone',
            route: '/products/iphone',
          },
          {
            icon: 'group',
            label: 'Samsung',
            route: '/products/samsung',
          },
        ],
      },
      {
        icon: 'group',
        label: 'Laptop',
        children: [
          {
            icon: 'group',
            label: 'MacBook',
            route: '/products/macbook',
          },
          {
            icon: 'group',
            label: 'Dell',
            route: '/products/dell',
          },
        ],
      },
    ],
  },
  {
    icon: 'elderly',
    label: 'Sản phẩm',
    firstLevel: true,
    children: [
      {
        icon: 'face',
        label: 'Điện thoại',
        children: [
          {
            icon: 'groups',
            label: 'iPhone',
            route: '/products/iphone',
          },
          {
            icon: 'group',
            label: 'Samsung',
            route: '/products/samsung',
          },
        ],
      },
      {
        icon: 'group',
        label: 'Laptop',
        children: [
          {
            icon: 'group',
            label: 'MacBook',
            route: '/products/macbook',
          },
          {
            icon: 'group',
            label: 'Dell',
            route: '/products/dell',
          },
        ],
      },
    ],
  },
];
