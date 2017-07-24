import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string}[] = [];

  // Allow angular to instantiate the service
  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    // Binds local collection to collection provided by service
    this.accounts = this.accountsService.accounts;
  }

  onAccountAdded(event: any) {
    // Call service methods
    this.accountsService.addAccount(event.name, event.status);
  }

  onStatusChanged(event: any) {
    // Call service methods
    this.accountsService.updateStatus(event.id, event.newStatus);
  }
}
