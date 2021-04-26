import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{PageComponent} from './page/page.component';
import{AskQuestionComponent} from './ask-question/ask-question.component';
import { CreateInternComponent } from '../create-intern/create-intern.component';
import { UpdateInternComponent } from '../update-intern/update-intern.component';

const routes: Routes = [
  {path:'page/:list',component:PageComponent},
  {path:'page/:list/create-intern',component:CreateInternComponent},
  {path:'ask',component:AskQuestionComponent},
  {path:'page/:list/update-intern/:id',component:UpdateInternComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
