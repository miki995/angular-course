import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: [ './interpolation.component.css' ]
})
export class InterpolationComponent {

  title = 'Interpolation Title';
  number1 = 2;
  number2 = 15;
  imageBase = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/';
  imageSrc = 'Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png';
}
