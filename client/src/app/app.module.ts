import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { NhanvienService } from './nhanvien/nhanvien.service';
import { PostnhanvienComponent } from './postnhanvien/postnhanvien.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PutnhanvienComponent } from './putnhanvien/putnhanvien.component';

const routesConfig: Routes = [
  {path: 'getnhanvien' , component: NhanvienComponent},
  {path: '' , redirectTo: '/getnhanvien' , pathMatch: 'full'},
  {path: 'postnhanvien' , component: PostnhanvienComponent},
  {path: 'putnhanvien/:id/:name/:age/:hometown' , component: PutnhanvienComponent},
  {path: '**' , component: PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NhanvienComponent,
    PostnhanvienComponent,
    PagenotfoundComponent,
    PutnhanvienComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [NhanvienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
