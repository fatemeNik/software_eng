import { SharedDataService } from './../../services/sharedData.service';
import { LoginComponent } from './../login/login.component';
import { templateJitUrl, templateSourceUrl } from '@angular/compiler';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { PlayerComponent } from '../player/player.component';
import { RequestListComponent } from 'src/app/request-list/request-list.component';
import { stringify } from '@angular/compiler/src/util';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-navabars',
  templateUrl: './navabars.component.html',
  // template: 'childNotif : {{notif_counter}}',
  styleUrls: ['./navabars.component.scss']

})
export class NavabarsComponent implements OnInit {

  myimage1: string = "assets/images/atp-logo.svg"
  // myimage2: string = "assets/images/816149.jpg"
  // @Input() notif_counter:any;
  notif_counter:number;
  first_name: string;
  last_name: string;
  isLog: boolean;
  
  constructor(public dialog: MatDialog, public dialog_notify: MatDialog, private sharedData: SharedDataService,
     private api: ApiService, private auth: AuthenticationService) {
  
     }
  
     
     
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog_notify() {
    const dialogRef = this.dialog_notify.open(RequestListComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }

  @ViewChild('nav') nav: ElementRef;
  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
    
    if (window.pageYOffset == 0) {
      this.nav.nativeElement.classList.remove('navbar-scroll');
      
    }else{
      this.nav.nativeElement.classList.add('navbar-scroll');
    }
  }

  ngOnInit() {  

    this.api.request_list();
    
    this.sharedData.fname.subscribe(name =>{

      this.first_name = name;
    });
    this.sharedData.lname.subscribe(name =>{

      this.last_name = name;
    });
    this.sharedData.isLogin.subscribe(Boolean =>{

      this.isLog = Boolean;
    });
    this.sharedData.parentNotif.subscribe(name =>{
      this.notif_counter = name;
    })
    console.log(this.sharedData.parentNotif.value);

   

  }


  logout(){
    this.auth.logout();
    console.log('currentUser');
  }


//   logout(){
//     this.auth.logout(JSON.parse(localStorage.getItem('currentUser')));
//  }
}
