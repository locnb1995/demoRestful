import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PutnhanvienService } from './putnhanvien.service';

@Component({
  selector: 'app-putnhanvien',
  templateUrl: './putnhanvien.component.html',
  styleUrls: ['./putnhanvien.component.css'],
  providers: [PutnhanvienService]
})
export class PutnhanvienComponent implements OnInit {

  constructor(private route: ActivatedRoute , private put: PutnhanvienService) { }
  id;
  name;
  age;
  hometown;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.name = params.get('name');
      this.age = params.get('age');
      this.hometown = params.get('hometown');
    });
  }
  onsubmit(formputNhanvien) {
    this.put.sendPut(this.id, formputNhanvien.value)
    .then(result => console.log(result))
    .catch(err => console.log(err));
    alert('Thay doi thong tin nhan vien thanh cong');
  }
}
