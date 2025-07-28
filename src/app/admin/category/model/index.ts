import { ColumnTableConfig } from 'src/app/shared/models/table.model';

export const TABLE_CONFIG: ColumnTableConfig[] = [
  { key: 'categoryName', header: 'table.thead.category_name', align: 'left' },
  {
    key: 'description',
    header: 'table.thead.description',
    align: 'left',
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
      isDelete: true,
    },
  },
];
