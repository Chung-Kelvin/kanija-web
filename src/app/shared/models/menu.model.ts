export interface IMenuItem {
  label: string;
  icon?: string;
  route?: string;
  children?: IMenuItem[];
  permission?: string;
}

export const MENU_CONFIG: IMenuItem[] = [
  {
    label: 'Nữ',
    route: '/nu'
  },
  {
    label: 'Nam',
    route: '/nam'
  },
  {
    label: 'Bé gái',
    route: '/girl'
  },
  {
    label: 'Bé trai',
    route: '/boy'
  },
  {
    label: 'Sản phẩm mới',
    route: '/new-product'
  },
  {
    label: 'BTS Em ơi em à',
    route: '/bst-em-oi-em-a'
  },
  {
    label: 'Canifa s',
    route: '/canifa-s'
  },
]
