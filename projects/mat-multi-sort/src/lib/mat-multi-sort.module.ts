import {NgModule} from '@angular/core';
import {MatMultiSortHeaderComponent} from './mat-multi-sort-header.component';
import {CommonModule} from '@angular/common';
import {MatMultiSort} from './mat-multi-sort.directive';
import {MatCommonModule} from '@angular/material';

@NgModule({
  declarations: [MatMultiSortHeaderComponent, MatMultiSort],
  exports: [MatMultiSortHeaderComponent, MatMultiSort],
  imports: [
    CommonModule,
    MatCommonModule
  ]
})
export class MatMultiSortModule {
}
