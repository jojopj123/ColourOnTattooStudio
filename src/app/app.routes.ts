import { RouterModule, Routes } from '@angular/router';
import { TattooHomeComponent } from './tattoo-home/tattoo-home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',component:TattooHomeComponent
    },
    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}