import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayouHeaderFooterPage } from './layou-header-footer.page';

const routes: Routes = [
  {
    path: '',
    component: LayouHeaderFooterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayouHeaderFooterPage]
})
export class LayouHeaderFooterPageModule {}
