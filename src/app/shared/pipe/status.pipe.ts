import { Pipe } from '@angular/core';
import { STATUS, StatusValue } from '../models/status.model';

@Pipe({ name: 'statusStyle', pure: true })
export class StatusStylePipe {
  transform(status: StatusValue) {
    return STATUS.find((s) => s.value === status);
  }
}
