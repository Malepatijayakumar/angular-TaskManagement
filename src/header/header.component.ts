/**
 * In order to convert this to component we import the Component decorator from the Anuglar core package
 */
import { Component } from '@angular/core';

@Component({
  /**
   * Which elements in the screen will be using / replaced our component, we can create any name just nominlature is two words seperated with -
   */
  selector: 'app-header',
  /**
   * Property marks this property as standalone component, for module based components we use false for this
   */
  standalone: true,
  /**
   * This decorator allows us to specify the HTML template for the component, enabling dynamic content rendering and user interaction
   * But this is not recommended to use direct template with html, it is recommended to use templateUrl which refers to the seperate html file.
   * ex:- templateUrl: 'relative filePath'
   */
  // template: '<h1> Hello World </h1>',
  templateUrl: './header.component.html',
  /**
   * Providing an seperate styling file
   */
  styleUrl: './header.component.css',
  /**
   * providing an inline style
   */
  // styles: ['h1 {color:red}'],
})

/**
 * To Export this class component
 */
export class HeaderComponent {}
