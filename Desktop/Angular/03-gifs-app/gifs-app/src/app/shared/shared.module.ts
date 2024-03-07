import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingImageComponent } from './components/loading-image/loading-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LoadingImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LoadingImageComponent,
  ]
})
export class SharedModule { }
