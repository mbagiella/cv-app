import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Person} from './model/Person';
import {STRUCTURE} from './Structure';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private fr:boolean=true;

  private structure=STRUCTURE;

  state = {img:false,function:false};
  constructor( private appService: AppService, private http: HttpClient) { }

  dlCv(){
    window.open(this.fr ? 'assets/doc/CV_2018_FR.pdf' : 'assets/doc/CV_2018_EN.pdf','_blank') ;
  }

  person:Person;

  ngOnInit() {
    this.appService.getPerson()
      .subscribe( data => {
        this.person = data;
        console.log(data);
      });
  };

  translate(en,fr){
    return (this.fr)?en:fr;
  }

  t(data){
    return (this.fr)?data[0]:data[1];
  }

  dl(link){
    window.open(link,'_blank');
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.pageYOffset
        this.state.img = scrollPosition >= 200
        this.state.function = scrollPosition >= 250
    }

    getLang(){
      return this.fr ? 'fr' : 'en';
    }

}
