import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {
  clicks:number = 0
  batActivated:boolean = false
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
    let tab:string[][] = [[], []]
    for (let i = 0; i < wordsTab.length ; i++) {
      if (i % 2 === 0) {
        tab[0].push(wordsTab[i])
      } else if (i % 2 !== 0) {
        tab[1].push(wordsTab[i])
      }
    }
    return tab
  }

  DisplayBatoSanTests() {
    if (this.batActivated === false) {
      this.batActivated = true
    } else {
      this.batActivated = false
    }
  }

  // Method to check a pair of words and see if they match (mandatory EN word as first arg)
  TranslatesToMoisi(engWord:string, japWord:string):boolean {
    // 1. check if the engWord and japWord are in the words database. If not, throw error
    if (!this.wordsDatabase.includes(engWord) && !this.wordsDatabase.includes(japWord)) {
      console.log(engWord + '/' + japWord + ': no such word in database');
    }
    // 2. check if the japWord's index equals to the engWord's minus 1. If not, return false
    if (this.wordsDatabase.indexOf(japWord) === (this.wordsDatabase.indexOf(engWord) + 1)) {
      return true
    } else {
      return false
    }
  }

  // Altered method to match check a pair of words in any order
  TranslatesTo(word1:string, word2:string):boolean {
    if (!this.wordsDatabase.includes(word1) && !this.wordsDatabase.includes(word2)) {
      console.log(word1 + '/' + word2 + ': no such word in database');
    }
    if (this.wordsDatabase.indexOf(word2) === (this.wordsDatabase.indexOf(word1) + 1) ||
        this.wordsDatabase.indexOf(word1) === (this.wordsDatabase.indexOf(word2) + 1)) {
      return true
    } else {
      return false
    }
  }

  // User interaction : clicks on buttons to match pairs of words
    // User clicks on a first word (either EN of JP) -> clicks attribute += 1 -> odd
    // User then clicks on a second word -> clicks attribute += 1 -> even
    // If the second word does not pair the first, the word selection is cleared for next input

  Click() {
    this.clicks += 1
  }

}
