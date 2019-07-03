import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { MainComponent } from './main/main.component'
import { AllPagesRoutingModule } from './all-pages-routing.module'
import { LayoutModule } from 'src/app/components/LayoutComponents/layout.module'
@NgModule({
  imports: [AllPagesRoutingModule, LayoutModule, SharedModule],
  declarations: [MainComponent],
})
export class AllPagesModule {}
