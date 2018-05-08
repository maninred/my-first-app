import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allNewServer=false;
  serverStatus="No server created";
  serverName:string="TestServer";

  constructor() { 
    setTimeout(()=>{

      this.allNewServer=true;
    },2000);


  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverStatus="Server was created! Server name is " +this.serverName ;
  }


  onUpdate(event :Event){
    console.log(event);
  this.serverName=(<HTMLInputElement>event.target).value;
    
  }


}
