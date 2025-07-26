export interface OptionConfig {
  value: number;
  label: string;
  style?: string;
}

export enum StatusValue {
  INACTIVE = 0,
  ACTIVE = 1,
  PROCESSING = 2,
}

export const STATUS: OptionConfig[] = [
  {
    value: StatusValue.INACTIVE,
    label: 'Inactive',
    style: 'bg-red-500 text-white',
  },
  {
    value: StatusValue.ACTIVE,
    label: 'Active',
    style: 'bg-green-500 text-white',
  },
  {
    value: StatusValue.PROCESSING,
    label: 'Processing',
    style: 'bg-yellow-500 text-white',
  },
];
