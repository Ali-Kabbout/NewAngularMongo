import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';
import { SharedService } from 'src/app/utils/services/shared.service';

 import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
// import { Service, Employee } from './app.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.scss']
})
export class ShowEmpComponent implements OnInit {

  constructor(public appService: AppService, private service: SharedService) { }


  value = "";
  txtTitle = "";
  txtStatus = "";
  txtFromDate = "";
  txtToDate = "";
  EmployeeList: any = [];
  dataSource: any;

  ModalTitle: string;
  ActivateAddEditEmpComp: boolean = false;
  emp: any;
  //  public txtTitle:string="";
  //  public txtStatus:string="";
  //  public txtFromDate:string="";
  //  public txtToDate:string="";
  clearValue() {
    this.value = "";
  }
  ngOnInit(): void {
    this.refreshEmpList();
  }


  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: "",
      Department: "",
      DateOfJoining: "",
      PhotoFileName: "anonymous.png"
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;

  }

  editClick(item) {
    console.log(item);
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item) {
    if (confirm('Are you sure??')) {
      // this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
      //   alert(data.toString());
      //   this.refreshEmpList();
      // })
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  helloWorld() {
    alert('Hello world!');
}
  refreshEmpList() {
    
    this.service.getEmployees().subscribe(data => {
      var obj = JSON.parse(data.toString());
      // this.gridContainer.dataSource=obj;
      this.EmployeeList = obj;
      this.dataSource=this.EmployeeList;
    });

  }

}

