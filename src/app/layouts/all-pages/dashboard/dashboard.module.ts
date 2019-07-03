import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { DashboardRouterModule } from './dashboard-routing.module'
import { CleanUIModule } from 'src/app/components/CleanUIComponents/cleanui.module'
import { ChartistModule } from 'ng-chartist'
import { NvD3Module } from 'ng2-nvd3'

import 'd3'
import 'nvd3'
import { DashboardComponent } from './dashboard.component'
const COMPONENTS = [DashboardComponent]

@NgModule({
  imports: [
    SharedModule,
    DashboardRouterModule,
    CleanUIModule,
    ChartistModule,
    NvD3Module,
    FormsModule,
  ],
  declarations: [...COMPONENTS],
})
export class DashboardModule {}
