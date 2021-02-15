import { NgModule, Component, enableProdMode, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';
import { SharedService } from 'src/app/utils/services/shared.service';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
// import { AddEditSalesComponent } from "../add-edit-sales/add-edit-sales.component";
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-sales',
  templateUrl: './show-sales.component.html',
  styleUrls: ['./show-sales.component.scss']
})
export class ShowSalesComponent implements OnInit {
  // @ViewChild('dxAddEditSalesComponent') dxAddEditSalesComponent: AddEditSalesComponent;


  constructor(private service: SharedService, public router: Router, private modalService: NgbModal,
    private route: ActivatedRoute) {
  }
  value = "";
  selected:any;
  txtStoreLocation = "";
  txtEmail = "";
  txtFromDate: Date = null;
  txtToDate: Date = null;
  txtPurchaseMethod = "";
  SalesList: any = [];
  dataSource: any;
  closeResult: string;
  txtCustomerEmail = "";
  txtAge = 0;
  txtSatisfaction = "";
  txtGender = "";
  txtCouponUsed= "";
  txtInputPurchaseMethod= "";
  txtInputSaleDate:Date= new Date();
  txtInputStoreLocation="";
  // City Names
  Gender: any = ['F', 'M']
  CouponUsed: any = ['true', 'false']
  // now: Date = new Date();
  now: Date;

  ModalTitle: string;
  ActivateAddEditEmpComp: boolean = false;
  sale: any;
  //  public txtTitle:string="";
  //  public txtStatus:string="";
  //  public txtFromDate:string="";
  //  public txtToDate:string="";
  clearValue() {
    this.value = "";
  }
  ngOnInit(): void {
    this.refreshSaleList();
  }


  addClick() {
    this.sale = {
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
    let me = this;
    console.log(item);
    this.sale = item;
    this.ModalTitle = "Edit Employee";
    // me.dxAddEditSalesComponent.open('s');

    // this.ActivateAddEditEmpComp = true;
  }
  deleteClick(item) {
    if (confirm('Are you sure??')) {
      // this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
      //   alert(data.toString());
      //   this.refreshSaleList();
      // })
    }
  }

  closeClick() {
    // this.ActivateAddEditEmpComp = false;
    // this.refreshSaleList();
  }

  helloWorld() {
    alert('Hello world!');
  }
  refreshSaleList() {
    this.service.getSales().subscribe(data => {
      this.SalesList = data;
      this.dataSource = this.SalesList;
    });

  }
  opens() {
  }
  open(content) {
    this.modalService.open(content, {  size: 'lg', backdrop: 'static',ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.SaveModal(reason)}`;
    // }
    this.SaveModal("reason");}
    );
  }
  private SaveModal(reason: any): string {


    this.service.SaveInSales(this.txtCustomerEmail, this.txtAge, this.txtSatisfaction, this.txtGender, this.txtCouponUsed
      ,this.txtInputPurchaseMethod, this.txtInputSaleDate, this.txtInputStoreLocation
      ).subscribe(data => {
      this.SalesList = data;
      this.dataSource = this.SalesList;
    });


    return 'by clicking on a backdrop';

  }


  //   click = e => {
  //     const buttonText = e.component.option("text");
  //     notify("The " + this.capitalize(buttonText) + " button was clicked");
  // }
  reset() {
    this.txtStoreLocation = "";
    this.txtEmail = "";
    this.txtFromDate = null;
    this.txtToDate = null;
    this.txtPurchaseMethod = "";

    this.refreshSaleList();
  }
  search() {
    this.service.getInSales(this.txtStoreLocation, this.txtEmail, this.txtFromDate, this.txtToDate, this.txtPurchaseMethod).subscribe(data => {
      this.SalesList = data;
      this.dataSource = this.SalesList;
    });
  }

  changeCity(e) {
    this.txtGender = e.value;
  }
  changeCouponUsed(e) {
    this.txtCouponUsed = e;
  }

  public onOptionsSelected(event) {
    const value = event.target.value;
    this.selected = value;
    console.log(value);
 }
 
}