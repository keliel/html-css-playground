import { Component, ViewEncapsulation } from '@angular/core';
import { DropdownlistComponent } from "../../html-topic/dropdownlist/dropdownlist";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pg-styled-dropdownlist',
  imports: [DropdownlistComponent, RouterLink],
  templateUrl: './dropdownlist.html',
  styleUrl: './dropdownlist.css',
  encapsulation: ViewEncapsulation.None, // No view encapsulation to keep styles simple for demonstration purposes
})
export class StyledDropdownlistComponent {
}
