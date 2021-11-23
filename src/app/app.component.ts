import { Component } from '@angular/core';



class Language {
  #code:any='en';
  #name:any='english';
  #rtl:boolean=false;
  #default:boolean=false;

  constructor(property:any){
    this.#code=property.code;
    this.#name=property.name;
    this.#rtl=property.rtl;
    this.#default=property.default;
  }
  get  codeInfo() {
    return this.#code;
  }
  get nameInfo() {
    return this.#name
  }
  get isRTL() {
    return this.#rtl
  }
  get isDefault() {
    return this.#default
  }

}

let lang1= new Language({
  code:'ru',
  name:'russia',
  rtl :true,
  default:true
});

console.log(lang1.isDefault);











@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';
}
