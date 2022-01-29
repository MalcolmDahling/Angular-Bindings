import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular-Bindings';

    imageSrc = 'https://www.w3schools.com/w3css/img_lights.jpg';

    klass1 = 'klass1';

    trueFalse = true;

    buttonClick(){
        alert('asdf');
    }
}
