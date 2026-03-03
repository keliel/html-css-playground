import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'pg-dropdownlist',
  imports: [],
  templateUrl: './dropdownlist.html',
})
export class DropdownlistComponent {

  protected options = signal([{
    text: 'Item One',
    category: 'Category One'
  }, {
    text: 'Item Two',
    category: 'Category Two'
  }, {
    text: 'Item Three',
    category: 'Category Two'
  }, {
    text: 'Item Four',
    category: 'Category Three'
  }, {
    text: 'Item Five',
    category: 'Category Three'
  }, {
    text: 'Item Six',
    category: 'Category Three'
  }, {
    text: 'Item Seven',
    category: 'Category Four'
  }, {
    text: 'Item Eight',
    category: 'Category Four'
  }, {
    text: 'Item Nine',
    category: 'Category Four'
  }, {
    text: 'Item Ten',
    category: 'Category Four'
  }]);

  protected groupedOptions = computed(() => this.options().reduce<{ category: string; options: ReturnType<typeof this.options> }[]>((g, o) => {
    const group = g.find(g => g.category === o.category);
    if (group) {
      group.options.push(o);
    } else {
      g.push({ category: o.category, options: [o] });
    }
    return g;
  }, []));
}
