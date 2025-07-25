import {inject, Injectable} from "@angular/core";
import {NzNotificationDataOptions, NzNotificationRef, NzNotificationService} from "ng-zorro-antd/notification";

type Opts = Partial<NzNotificationDataOptions>;

@Injectable({providedIn: 'root'})
export class KanNotifyService {
  private readonly nz = inject(NzNotificationService);

  private readonly defaultOpts: NzNotificationDataOptions = {
    nzDuration: 3000,
    nzPlacement: 'topRight',
    nzPauseOnHover: true
  };

  success(title: string, content = '', opts?: Opts): NzNotificationRef {
    return this.nz.success(title, content, {...this.defaultOpts, ...opts});
  }

  error(title: string, content = '', opts?: Opts): NzNotificationRef {
    return this.nz.error(title, content, {...this.defaultOpts, ...opts});
  }

  closeAll() {
    this.nz.remove();
  }

}
