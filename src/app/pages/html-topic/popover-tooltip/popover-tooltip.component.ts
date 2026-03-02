import { Component } from '@angular/core';

@Component({
  selector: 'pg-popover-tooltip',
  imports: [],
  templateUrl: './popover-tooltip.component.html',
  styleUrl: './popover-tooltip.component.css',
})
export class PopoverTooltipComponent {
  protected readonly accordionId = `accordion-${Math.random().toString(36).substring(2, 11)}`;

  protected tooltips = [
    {
      id: this.generateTooltipId(),
      text: 'Item One',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odio quisquam illo, ad est laboriosam voluptate, deleniti consequatur, magnam cumque. Voluptas, voluptate. Laborum reiciendis iste dignissimos officiis! Eius.',
    },
    {
      id: this.generateTooltipId(),
      text: 'Item Two',
      content: 'Magna quis duis tempor mollit. Enim esse aliqua excepteur aute. Ipsum consequat deserunt nulla ipsum exercitation id eu anim. Pariatur aliquip pariatur aliqua id. Ea id aliqua esse consectetur eiusmod laborum aute adipisicing nulla laborum amet id culpa.',
    },
    {
      id: this.generateTooltipId(),
      text: 'Item Three',
      content: 'Eiusmod in duis eu consequat laborum ea enim magna incididunt ex sit adipisicing. Adipisicing ea eu do exercitation magna veniam. Nostrud in dolor ut velit enim irure magna officia consectetur ad nisi fugiat ut.',
    },
  ];

  private generateTooltipId(): string {
    return`tooltip-${Math.random().toString(36).substring(2, 11)}`;
  }
}
