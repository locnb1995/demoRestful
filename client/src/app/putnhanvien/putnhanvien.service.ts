import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PutnhanvienService {
    constructor(private http: Http) {}
    sendPut(id, value) {
        const url = 'http://localhost/quanly/server/public/api/put-nhanvien/' + id;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(value);
        return this.http.put(url , body , { headers })
        .toPromise()
        .then(res => res.json());
    }
}
