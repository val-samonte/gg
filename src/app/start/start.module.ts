import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StartRoutingModule } from './start-routing.module';
import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    StartRoutingModule
  ],
  declarations: [StartPageComponent]
})
export class StartModule { }
