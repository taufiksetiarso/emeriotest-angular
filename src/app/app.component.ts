import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emeriotest-angular';
  map: any;
  num: any;
  cars:any;
  sm:any;
  constructor(){

   }
   allCharactersSame(s:String)
    {
      s=this.sm
      this.map = new Map<String,Number>();
       this.cars = new  Array<String>();
        for (let i = 0; i < s.length; i++) {
          var  c = s.charAt(i);

            if (this.map.get(c)) {
                let cnt = this.map.get(c);
                this.map.set(c, ++cnt);
                
            } else {
              this.map.set(c, 1);
            }

        }

      let cand=0;
      let rslt="";
      this.map.forEach((value: number, key: string) => {

        if(cand<value){

          cand=value
          rslt=key
        }


    });
        return rslt;
    }
    
}
