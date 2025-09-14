import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export class Details {
  isPlaying = false;
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio('Sweet Child O Mine.mp3');
    this.audio.loop = true;
    this.audio.volume = 0.5;
    this.audio.currentTime = 8;
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
    this.isPlaying = !this.isPlaying;
  }
}
