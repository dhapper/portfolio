import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from "./components/body/body.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    BodyComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
