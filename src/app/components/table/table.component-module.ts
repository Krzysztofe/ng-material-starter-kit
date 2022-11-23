import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatCardModule],
  declarations: [TableComponent],
  providers: [],
  exports: [TableComponent]
})
export class TableComponentModule {
}
