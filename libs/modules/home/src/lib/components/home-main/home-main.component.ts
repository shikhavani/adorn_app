import { Component, OnInit } from '@angular/core';
import { ApiService } from '@adorn-app/core/tools';
@Component({
  selector: 'adorn-app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  imagArr = [ ];
  imageSizeConfig = {width: '50%', height: '70%', space: 8}
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getImageList();
  }

  getImageList() {
    this.apiService.sendGETRequest('assets/home/imageList.json').subscribe((res)=> {
      this.imagArr = res.map((element) => {
        return {
          image: 'assets/home/' + element,
          thumbImage: 'assets/home/' + element,
          alt: 'adorn furnitures image'
        }
      })
    });
  }

}
