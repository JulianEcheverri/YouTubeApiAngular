import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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

    return this._httpClient.get(url, { params });
  }
}
