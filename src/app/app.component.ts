import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Single tree',
      username: '@Nature',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia eum pariatur adipisci obcaecati maxime culpa amet minima quis fuga!',
      imageUrl: 'assets/tree.png',
    },
    {
      title: 'Old school transport',
      username: '@Active',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia eum pariatur adipisci obcaecati maxime culpa amet minima quis fuga!',
      imageUrl: 'assets/bike.png',
    },
    {
      title: 'Good to have friends',
      username: '@Social',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia eum pariatur adipisci obcaecati maxime culpa amet minima quis fuga!',
      imageUrl: 'assets/socials.jpg',
    },
  ];
}
