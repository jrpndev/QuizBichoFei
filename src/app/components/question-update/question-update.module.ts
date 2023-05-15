import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionUpdateComponent } from './question-update.component';
import { UpdateQuestionRoutingModule } from './question-update-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    QuestionUpdateComponent
  ],
  imports: [
    CommonModule,
    UpdateQuestionRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ]
})
export class QuestionUpdateModule { }
