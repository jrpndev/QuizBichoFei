import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionUpdateComponent } from './question-update.component';

const routes: Routes = [{
  path : '', component : QuestionUpdateComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateQuestionRoutingModule{ }
