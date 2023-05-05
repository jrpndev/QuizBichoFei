import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {

  updateSelection(options: any, selectedOption: any) {
    for (let option of options) {
      if (option.label !== selectedOption.label) {
        option.selected = false;
      }
    }
  }
  
  selectedOption(options: any) {
    for (let option of options) {
      if (option.selected) {
        return option;
      }
    }
    return null;
  }

  Score: number = 0;

  Questions = [
    {
      id: 1,
      subject: "Quanto é 2 + 2 ? ",
      solve: '4',
      options: [
        { value: '2', label: '2', selected: false, correct: false },
        { value: '4', label: '4', selected: false, correct: true },
        { value: '6', label: '6', selected: false, correct: false },
        { value: '8', label: '8', selected: false, correct: false }
      ],
      isMarked: false,
      img: "https://picsum.photos/500/500"
    },
    {
      id: 2,
      subject: "Quanto é 2 + 5 ? ",
      solve: '7',
      options: [
        { value: '2', label: '2', selected: false, correct: false },
        { value: '4', label: '4', selected: false, correct: false },
        { value: '7', label: '7', selected: false, correct: true },
        { value: '8', label: '8', selected: false, correct: false }
      ],
      isMarked: false,
      img: 'https://th.bing.com/th/id/R.8f4603edeb36dbf932072a6a74b10d69?rik=rvl%2fK06tm3XaLg&pid=ImgRaw&r=0'
    }
  ];



  constructor() { }
  ngOnInit(): void {
  }

  answerQuestion(option: string, id: number) {
    this.Questions.map(a => {
      if (a.id == id) {
        if (a.solve == option) {
          a.isMarked = true
        }
        else {
          a.isMarked = false
        }
      }
    })
  }

  score() {
    this.Questions.map(a => a.options.map(b => {
      if (b.correct && b.selected) this.Score++;
    }))
    console.log(this.Score);
  }
}
