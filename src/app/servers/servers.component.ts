import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allNewServer=false;
  serverStatus="No server created";

  constructor() { 
    setTimeout(()=>{

      this.allNewServer=true;
    },2000);


  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverStatus="Server was created!";
  }



}
