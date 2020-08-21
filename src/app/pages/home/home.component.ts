import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _youtubeService: YoutubeService) { }

  ngOnInit(): void {
    // El subscribe es necesario por que se debe de estar pendiente de la respuesta de la peticion y los datos que retorna
    this._youtubeService.getVideos().subscribe(resp => {
      console.log(resp);
    });

  }

}
