import { Component } from '@angular/core';
import { BuiltinType } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'vuzix';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // bs = 8; enter = 13; delete = 46;  aright = 39;  aleft = 37;
    
    window.addEventListener('keyup', ($key) => {
      if ($key.keyCode == 39) {
        window.document.getElementById('confirm').click();        
        console.log(12)
      }
      console.log($key)
    });
    
    // window.document.addEventListener('keydown') = function($key) {
    //   console.log($key);
    // }

  }


}
