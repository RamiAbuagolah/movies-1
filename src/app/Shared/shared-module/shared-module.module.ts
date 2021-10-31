import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
   FormsModule,
   CommonModule
  ],
  exports:[
    FormsModule,
   CommonModule
  ]
})
export class SharedModuleModule { }
