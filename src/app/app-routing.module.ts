import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'instalacao', loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
  { path: 'layou-header-footer', loadChildren: './layou-header-footer/layou-header-footer.module#LayouHeaderFooterPageModule' },
  { path: 'layout-tabs', loadChildren: './tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layout-tabs/tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'layout-tabs/tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'layout-tabs/tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'layout-grid', loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
