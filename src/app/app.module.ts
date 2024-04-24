import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicsComponent } from './basics/basics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ChildOneComponent } from './basics/child-one/child-one.component';
import { DynamicAdComponent } from './basics/dynamic-ad/dynamic-ad.component';
import { PipesComponent } from './basics/pipes/pipes.component';
import { MobilesComponent } from './basics/dynamic-ad/mobiles/mobiles.component';
import { ShoesComponent } from './basics/dynamic-ad/shoes/shoes.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    PageNotFoundComponent,
    NoAccessComponent,
    ContentProjectionComponent,
    ChildOneComponent,
    DynamicAdComponent,
    PipesComponent,
    MobilesComponent,
    ShoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
