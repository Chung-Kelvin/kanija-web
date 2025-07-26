export enum TABLE_ACTION {
  EDIT = 'edit',
  DELETE = 'delete',
  COPY = 'copy',
  VIEW = 'view',
}

export interface ColumnTableConfig {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right' | null;
  width?: string;
  tdClass?: string;
  thClass?: string;
  pipe?: 'action' | 'color' | 'number' | 'date' | 'currency' | null;
  sort?: boolean;
  action?: {
    isDelete?: boolean;
    isEdit?: boolean;
    isView?: boolean;
    isCustom?: boolean;
  };
}

export const TABLE_CONFIG: ColumnTableConfig[] = [
  { key: 'categoryName', header: 'Category name', align: 'left' },
  {
    key: 'description',
    header: 'Description',
    align: 'left',
  },
  {
    key: 'quanityProduct',
    header: 'Quanity product',
    align: 'center',
  },
  {
    key: 'status',
    header: 'Status',
    align: 'center',
    tdClass: 'bg-red-500 text-white',
    pipe: 'color',
  },
  {
    key: 'action',
    header: 'Action',
    align: 'center',
    pipe: 'action',
    width: '150px',
    action: {
      isEdit: true,
      isView: true,
      isCustom: true,
      isDelete: true,
    },
  },
];
