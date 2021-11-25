import { Component } from '@angular/core';

const languageData = [{
  code: 'en',
  name: 'English',
  rtl: false,
  defaults: true,
  },
  {
  code: 'ru',
  name: 'Russian',
  rtl: false,
  defaults: false,
  },
  {
  code: 'ar',
  name: 'Arabic',
  rtl: true,
  defaults: false,
  },
  ];
class Language {
  code:string='en';
  name:string='english';
  rtl:boolean=false;
  defaults:boolean=false;

  constructor(property:any){
    this.code=property.code;
    this.name=property.name;
    this.rtl=property.rtl;
    this.defaults=property.defaults;
  }
  get  codeInfo() {
    return this.code;
  }
  get nameInfo() {
    return this.name
  }
  get isRTL() {
    return this.rtl
  }
  get isDefault() {
    return this.defaults
  }

}

const languages = languageData.map((item)=>{
  return new Language(item);
});
console.log(languages);

function isRTL (languages:any) {

  const rtlLang=languages.filter((lang:any)=>{
    return lang.rtl ==true;
  });

  return rtlLang;
  
}

function isDefault (languages:any) {

  const defaultLang=languages.filter((lang:any)=>{
    return lang.defaults == true;
  });

  return defaultLang;
  
}

console.log(isRTL(languages));
console.log(isDefault(languages));



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';
}
