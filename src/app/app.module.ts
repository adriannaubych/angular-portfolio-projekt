import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DescriptionComponent } from './description/description.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { OpinionsComponent } from './opinions/opinions.component';
import { SendedComponent } from './contact/sended/sended.component';
import { PageNotFoundComponent } from './pageNotFound.component';
//Components
import { AuthGuard } from './contact/auth.guard';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
// Material

import { RouterModule, Routes } from '@angular/router';
import { AccountService } from './contact/account.service';

// do galerii
import { ThumbComponent } from './gallery/thumb/thumb.component';



const routes: Routes = [
  {
    path: '',
    component: MainpageComponent
  },
  {
    path: 'opis',
    component: DescriptionComponent
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
  {
    path: 'galeria',
    component: GalleryComponent
  },
  {
  path: 'opinie',
  component: OpinionsComponent
  },
  {
    path:'wypelnionyformularz',
    component: SendedComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes), BrowserAnimationsModule, MatCheckboxModule, MatTabsModule, MatListModule, MatTreeModule, MatIconModule, MatCardModule,  MatExpansionModule, MatFormFieldModule, MatTableModule, MatSelectModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, MatMomentDateModule, MatNativeDateModule, MatButtonModule, MatSidenavModule
  ],
  
  declarations: [ AppComponent, GalleryComponent, MainpageComponent, DescriptionComponent, ContactComponent, MenuComponent, OpinionsComponent, SendedComponent, ThumbComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AccountService, AuthGuard ]
})
export class AppModule { }
