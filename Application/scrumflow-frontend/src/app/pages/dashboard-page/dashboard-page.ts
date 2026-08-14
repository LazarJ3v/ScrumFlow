import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../store/auth/auth.selectors';
import { SidebarComponent } from '../../components/sidebar/sidebar';
import { TableProfile } from '../../components/table-profile/table-profile';
import { JoinCode } from '../../components/join-code/join-code';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    TitleCasePipe,
    SidebarComponent,
    TableProfile,
    JoinCode
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  private store = inject(Store);

  user = toSignal(this.store.select(selectCurrentUser));

  isProductOwner = computed(() => this.user()?.role === 'PRODUCT_OWNER');
  isScrumMaster = computed(() => this.user()?.role === 'SCRUM_MASTER');
  isDeveloper = computed(() => this.user()?.role === 'DEVELOPER');
  isClient = computed(() => this.user()?.role === 'CLIENT');
  isAdmin = computed(() => this.user()?.role === 'ADMIN');
}
