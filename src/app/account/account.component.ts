import { Component, EventEmitter, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // What class is providing the service
  // AccountsService is not a provider here, we use the instance created in the app.module
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // This informs Angular that we will need and instance of this logging service
  constructor(private loggingServce: LoggingService,
    private accountsService: AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingServce.logStatusChange(status);
  }
}
