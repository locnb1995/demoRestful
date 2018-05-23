import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class NhanvienService {
    constructor(private http: Http) {}
    getNhanvien() {
        return this.http.get('http://localhost/quanly/server/public/api/get-nhanvien')
        .map(res => res.json());
    }
    deleteNhanvien(id) {
        const url = 'http://localhost/quanly/server/public/api/delete-nhanvien/' + id;
        return this.http.delete(url).map(res => res.json());
    }
}
