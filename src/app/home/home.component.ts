import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  explanation = "Yes, you read it right! We don't just offer FRESH HOMEMADE COOKIES, as we also offer a variety of flavors that will surely satisfy your cravings!";

  img1 = "cookies/red-velvet.png";
  img2 = "cookies/smores.png";
  img3 = "cookies/choco-white.png";
}
