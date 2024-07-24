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
  firstClickedWord: string | null = null; // store the first clicked word
  firstClickedIndex: number | null = null;
  secondClickedWord: string | null = null; // store the second clicked word
  secondClickedIndex: number | null = null;
  batActivated:boolean = false
  wordsDatabase:string[] = ['thank you', 'arigato', 
                            'damn', 'kuso', 
                            'pervert', 'hentai', 
                            'my name is', 'watashiwa',
                            'i see', 'sokka'
                          ]
  shuffledEnglishWords:string[]= [];
  shuffledJapaneseWords:string[] = [];

  constructor() {
    this.shuffleWords()
  }
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

  // Altered method to match check a pair of words in any order
  TranslatesTo(word1: string, word2: string): boolean {
    const index1 = this.wordsDatabase.indexOf(word1);
    const index2 = this.wordsDatabase.indexOf(word2);
    
    if (index1 === -1 || index2 === -1) {
      console.log(`${word1}/${word2}: no such word in database`);
      return false;
    }
    
    // Check if word1 and word2 are correctly paired
    if (Math.abs(index1 - index2) === 1 // check if adjacent elems
    && Math.min(index1, index2) % 2 === 0) { // check if lower elem is even (= eng word)
      return true;
    } else {
      return false;
    }
  }

  HandleClick(word:string, index:number) {
    this.clicks += 1
    if (this.clicks % 2 !== 0) {
      this.firstClickedWord = word // hydrating the first click variable
      this.firstClickedIndex = index
      this.secondClickedWord = null; // clear previous second click
      this.secondClickedIndex = null;
      console.log('selected : ' + this.firstClickedWord)
    } else {
      this.secondClickedWord = word
      this.secondClickedIndex = index
      if (this.firstClickedWord) { // true if not null
        if (this.TranslatesTo(this.firstClickedWord, word)) {  // Check if pairs match
          console.log(`Match found: ${this.firstClickedWord} translates to ${this.secondClickedWord}`);
        } else {
          console.log(`No match: ${this.firstClickedWord} does not translate to ${this.secondClickedWord}`);
        }
      }
      // reset for next pair matching attempt
      this.firstClickedWord = null
      this.firstClickedIndex = null 
      this.secondClickedWord = null
      this.secondClickedIndex = null
    }
  }

// Display method to reset a board of 10 words in a shuffled manner

  shuffleArray(array: string[]): string[] {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  shuffleWords() {
    this.shuffledEnglishWords = this.shuffleArray(this.GetEnglishWords(this.wordsDatabase));
    this.shuffledJapaneseWords = this.shuffleArray(this.GetJapaneseWords(this.wordsDatabase));
  }


  // Dynamically styling clicked elements

  getButtonClass(index: number): string {
    if (index === this.firstClickedIndex || index === this.secondClickedIndex) {
      if (this.firstClickedIndex !== null && this.secondClickedIndex !== null) {
        return this.TranslatesTo(this.firstClickedWord!, this.secondClickedWord!) ? 'has-background-success' : 'has-background-danger';
      }
      return 'has-background-info';
    }
    return '';
  }

}
