import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { MediaCapture } from '@awesome-cordova-plugins/media-capture';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  public image = 'https://picsum.photos/seed/picsum/400/400';
  public video =
    'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';
  public audio =
    'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3';
  constructor() {}

  async captureImage() {
    const imageFile = await MediaCapture.captureImage();
    if (imageFile instanceof Array)
      this.image = Capacitor.convertFileSrc(imageFile[0].fullPath);
  }

  async captureVideo() {
    const videoFile = await MediaCapture.captureVideo();
    if (videoFile instanceof Array)
      this.video = Capacitor.convertFileSrc(videoFile[0].fullPath);
  }

  async captureAudio() {
    const audioFile = await MediaCapture.captureAudio();
    if (audioFile instanceof Array)
      this.audio = Capacitor.convertFileSrc(audioFile[0].fullPath);
  }
}
