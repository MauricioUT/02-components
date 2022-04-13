import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeadersComponent
  ],
  exports: [ //se exportan los componentes que use el modulo para que cuando se importe el modulo se puedan usar tambén sus componentes
    HeadersComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
