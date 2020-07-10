import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {FontSelectionAreaComponent} from "./components/font-selection-area/font-selection-area.component";
import {BgSelectionAreaComponent} from "./components/bg-selection-area/bg-selection-area.component";

const routes: Routes = [
  { path: '', component: MainComponent,
    children:[
      {
        path:'',
        redirectTo:'font-select',
        pathMatch:'full'
      },
      {
        path: 'font-select',
        component: FontSelectionAreaComponent
      },
      {
        path: 'bg-select',
        component: BgSelectionAreaComponent
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
