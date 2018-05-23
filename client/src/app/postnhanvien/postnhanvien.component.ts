import { Component, OnInit } from '@angular/core';
import { PostnhanvienService } from './postnhanvien.service';

@Component({
  selector: 'app-postnhanvien',
  templateUrl: './postnhanvien.component.html',
  styleUrls: ['./postnhanvien.component.css'],
  providers: [PostnhanvienService]
})
export class PostnhanvienComponent implements OnInit {
  constructor(private post: PostnhanvienService) { }

  ngOnInit() {
  }
  onsubmit(formNhanvien) {
    this.post.sendPost(formNhanvien.value)
    .then(result => console.log(result))
    .catch(err => console.log(err));
    alert('Them nhan vien thanh cong');
  }
}
