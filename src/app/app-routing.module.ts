import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SharedModule } from './shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppPreloader } from './app-routing-loader'

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/layouts/auth-pages/auth-pages.module#AuthPagesModule',
  },
  {
    path: 'main',
    loadChildren: 'src/app/layouts/all-pages/all-pages.module#AllPagesModule',
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: AppPreloader,
    }),
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
