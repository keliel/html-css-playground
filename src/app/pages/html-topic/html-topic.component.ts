import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';
import { PopoverTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { DropdownlistComponent } from './dropdownlist/dropdownlist.component';

@Component({
  selector: 'pg-html-topic',
  imports: [RouterLink, AccordionComponent, PopoverTooltipComponent, DropdownlistComponent],
  templateUrl: './html-topic.component.html',
  styleUrl: './html-topic.component.css',
})
export class HtmlTopicComponent {

}
