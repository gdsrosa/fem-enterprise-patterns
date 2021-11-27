import { Component } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  price;
  mode;
  widgets: Widget[];

  addWidget(widgets, widget) {
    const newWidget = Object.assign({}, widget, { id: uuidv4() });
    return [...widgets, newWidget];
  }

  updateWidget(widgets, widget) {
    return widgets.map((_widget) =>
      widget.id === _widget.id ? Object.assign({}, widget) : _widget
    );
  }

  deleteWidget(widgets, widget) {
    return widgets.filter((_widget) => widget.id !== _widget.id);
  }

  getTotalPrice(widgets) {
    return widgets.reduce((acc, curr) => acc + curr.price, 0);
  }

  updateWidgets(mode, widgets, widget) {
    switch (mode) {
      case 'create':
        return this.addWidget(widgets, widget);
      case 'update':
        return this.updateWidget(widgets, widget);
      case 'delete':
        return this.deleteWidget(widgets, widget);
      default:
        break;
    }
  }

  reCalculateTotal(mode: string, widgets: Widget[], widget: Widget) {
    this.updateWidgets(mode, widgets, widget);
    this.getTotalPrice(widgets);
  }
}
