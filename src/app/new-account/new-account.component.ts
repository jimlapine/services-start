import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // What class(s) is providing the service
  // AccountsService is not a provider here, we use the instance created in the app.module
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // This informs Angular that we will need and instance of this logging service
  constructor(private loggingServce: LoggingService,
              private accountsService: AccountsService) {
                
      // Subscribe to the event emitted by the service
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert(`New status: ${status}`)
      );
     }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingServce.logStatusChange(accountStatus);
  }
}
