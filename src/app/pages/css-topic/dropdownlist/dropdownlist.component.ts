import { Component, ViewEncapsulation } from '@angular/core';
import { DropdownlistComponent } from '../../html-topic/dropdownlist/dropdownlist.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pg-styled-dropdownlist',
  imports: [DropdownlistComponent, RouterLink],
  templateUrl: './dropdownlist.component.html',
  styleUrl: './dropdownlist.component.css',
  encapsulation: ViewEncapsulation.None, // No view encapsulation to keep styles simple for demonstration purposes
})
export class StyledDropdownlistComponent {
}
