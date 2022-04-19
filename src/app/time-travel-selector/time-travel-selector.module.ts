import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TimeTravelSelectorService } from './time-travel-selector-service.service';
import { TimeTravelSelectorComponent } from './time-travel-selector-component/time-travel-selector-component.component';
import { TimeTravelSelectorResolverServiceResolver } from './time-travel-selector-resolver-service.resolver';

const routes: Routes = [
  {
    path: '',
    component: TimeTravelSelectorComponent,
    resolve: {
      data: TimeTravelSelectorResolverServiceResolver
    }
  }
];

@NgModule({
  declarations: [
    TimeTravelSelectorComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  providers: [TimeTravelSelectorService],
  exports: [RouterModule]

})
export class TimeTravelSelectorModule { }

