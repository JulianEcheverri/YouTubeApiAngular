import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResp } from '../models/youtube.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private readonly _youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private readonly _apiKey = 'AIzaSyDeP6pYtVtzvGWDhy7dFPETOMm1UAs9Ivc';
  private _playListId = 'UUuaPTYj15JSkETGnEseaFFg';
  private _nextPageToken = '';


  constructor(private _httpClient: HttpClient) {
  }

  getVideos() {
    const url = `${this._youtubeUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this._playListId)
      .set('key', this._apiKey)

    // Solo se quieren los videos de la respuesta
    // Usamos pipe por que nos permiten usar operadores de rxjs y asi usar el map() para filtrar la informacion

    return this._httpClient.get<YoutubeResp>(url, { params })
      .pipe(
        map(resp => {
          this._nextPageToken = resp.nextPageToken;
          return resp.items;
        }),
        // Filtramos dentro del primer map, los videos, con otro map
        map(items => items.map(video => video.snippet))
      );
  }
}
