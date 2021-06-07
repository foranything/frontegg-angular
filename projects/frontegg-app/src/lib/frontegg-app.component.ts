import { Component, OnInit, OnDestroy } from '@angular/core';
import { FronteggAppService } from './frontegg-app.service';
import { FronteggAppAuthService } from './frontegg-app-auth.service';
@Component({
  selector: 'frontegg-app',
  template: `<div *ngIf="!loading && !isAuthRoute"><ng-content></ng-content></div>`,
})
export class FronteggAppComponent implements OnInit, OnDestroy {
  name: string;
  loading: boolean;
  isAuthRoute: boolean;

  constructor(private fronteggAppService: FronteggAppService, private fronteggAppAuthService: FronteggAppAuthService) {
    this.name = 'FronteggApp';
    this.loading = false;
    this.isAuthRoute = false;
  }

  ngOnDestroy(): void {
    this.fronteggAppService?.fronteggApp?.unmountAdminPortal()
  }

  ngOnInit(): void {
    this.fronteggAppService.isLoading$.subscribe((loading) => {
      this.loading = loading
    })
    this.fronteggAppService.isAuthRoute$.subscribe((isAuthRoute) => {
      this.isAuthRoute = isAuthRoute
    })
  }

}
