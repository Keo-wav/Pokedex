import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {
  wordsDatabase:string[] = ['thank you', 'arigato', 
                            'damn', 'kuso', 
                            'pervert', 'hentai', 
                            'my name is', 'watashiwa',
                            'i see', 'sokka'
                          ]

  GetEnglishWords(wordsTab:string[]):string[] {
    let tab:string[] = []
    for (let i = 0; i < wordsTab.length ; i++) {
      if (i % 2 === 0) {
        tab.push(wordsTab[i])
      }
    }
    return tab
  }

  GetJapaneseWords(wordsTab:string[]):string[] {
    let tab:string[] = []
    for (let i = 0; i < wordsTab.length ; i++) {
      if (i % 2 !== 0) {
        tab.push(wordsTab[i])
      }
    }
    return tab
  }

  SeparateWords(wordsTab:string[]):string[][] {
    let tab:string[][] = [[]]
    for (let i = 0; i < wordsTab.length ; i++) {
      if (i % 2 === 0) {
        tab[0].push(wordsTab[i])
      } else if (i % 2 !== 0) {
        tab[1].push(wordsTab[i])
      }
    }
    return tab
  }
}
