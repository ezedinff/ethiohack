import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ConfigService {
  private config: Object;
  private env: Object;

  constructor(private httpClient: HttpClient) {
  }

  /**
   *  loads the enviroment config first. reads the envitoment variable from the file
   *  and based on that loads the appropriate configuration file - development or production
   */
  load() {
    return new Promise((resolve => {
      const headerOptions = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'DataType': 'application/json'
      });
      this.httpClient.get('/config/env.json').subscribe(env_data => {
        this.env = env_data;
        this.httpClient.get(`/config/${env_data['env']}.json`).subscribe(res => {
          this.config = res;
          resolve(true);
        });
      });
    }));
  }

  /**
   * returns environment variable based on given key
   * @param key: any
   */
  getEnv(key: any) {
    return this.env[key];
  }

  /**
   * returns configuration value based on given key
   * @param key: any
   */
  get(key: any) {
    return this.config[key];
  }
}
