import { Component } from '@angular/core';

@Component({
  selector: 'pg-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  protected panels = [
    {
      title: 'Item One',
      content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odio quisquam illo, ad est laboriosam voluptate, deleniti consequatur, magnam cumque. Voluptas, voluptate. Laborum reiciendis iste dignissimos officiis! Eius.'],
    },
    {
      title: 'Item Two',
      content: ['Magna quis duis tempor mollit. Enim esse aliqua excepteur aute. Ipsum consequat deserunt nulla ipsum exercitation id eu anim. Pariatur aliquip pariatur aliqua id. Ea id aliqua esse consectetur eiusmod laborum aute adipisicing nulla laborum amet id culpa.',
        'Non irure dolore sit cupidatat deserunt in adipisicing ut. Ut duis in aliqua commodo ea non duis deserunt enim aute do cillum est proident.'],
    },
    {
      title: 'Item Three',
      content: ['Eiusmod in duis eu consequat laborum ea enim magna incididunt ex sit adipisicing. Adipisicing ea eu do exercitation magna veniam. Nostrud in dolor ut velit enim irure magna officia consectetur ad nisi fugiat ut.',
        'Adipisicing ea eu do exercitation magna veniam. Nostrud in dolor ut velit enim irure magna officia consectetur ad nisi fugiat ut.'],
    },
  ];
}
