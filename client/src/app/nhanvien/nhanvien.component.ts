import { Component, OnInit } from '@angular/core';
import { NhanvienService } from './nhanvien.service';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent implements OnInit {
  constructor(private nhanvienService: NhanvienService) { }
  nhanvien;
  id;
  deletenv(id) {
    this.nhanvienService.deleteNhanvien(id).subscribe(data => {
      console.log('success');
    });
    alert('Xoa nhan vien thanh cong');
  }
  ngOnInit() {
    this.nhanvienService.getNhanvien().subscribe(res => this.nhanvien = res);
  }
}
