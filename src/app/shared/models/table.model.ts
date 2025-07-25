export interface ColumnTableConfig {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right' | null;
  width?: string;
  tdClass?: string;
  thClass?: string;
  pipe?: 'action' | 'color' | 'number' | 'date' | 'currency' | null;
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
    align: 'left',
  },
  {
    key: 'status',
    header: 'Status',
    align: 'center',
  },
  {
    key: 'action',
    header: 'Action',
    align: 'center',
  },
];
