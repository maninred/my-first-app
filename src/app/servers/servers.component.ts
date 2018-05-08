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
  isClicked=false;
  servers=["test1", "ttest2"];

  constructor() { 
    setTimeout(()=>{

      this.allNewServer=true;
    },2000);


  }

  ngOnInit() {
  }

  onCreateServer(){
    this.isClicked=true;
    this.servers.push(this.serverName );
  }


  onUpdate(event :Event){
    console.log(event);
  this.serverName=(<HTMLInputElement>event.target).value;
    
  }


}
