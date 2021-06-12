import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PercentageBoxComponent } from './percentage-box/percentage-box.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PieChartComponent,
    PercentageBoxComponent,
    DataTableComponent,
    FilterUserPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
