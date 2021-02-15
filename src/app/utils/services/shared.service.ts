import { Injectable } from '@angular/core';
// import {HttpClient,HttpParams} from '@angular/common/http';
  import { Router } from '@angular/router';
  import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
 import { retry, catchError } from 'rxjs/operators';
 import{books}from 'src/app/modal/book';
 import { map } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:10420/api";
  readonly PhotoUrl = "http://localhost:10420/Photos/";
  // Define API
  apiURL = 'http://localhost:10420/api';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  



  // HttpClient API get() method => Fetch employees list
  getSales(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/Sales/GetAll')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

    // HttpClient API get() method => Fetch employees list
    getInSales(storeLocation:string,email:string,fromDate:Date,toDate:Date,purchaseMethod:string): Observable<any> {
      let params = new HttpParams();
       params = params.set('storeLocation', storeLocation.toString());
      params = params.set('email', email.toString());
      if(fromDate==null)
      params = params.set('fromDate', null);
      else
      params = params.set('fromDate', fromDate.toDateString());

      if(toDate==null)
      params = params.set('toDate', null);
      else
      params = params.set('toDate', toDate.toDateString());

       params = params.set('purchaseMethod', purchaseMethod.toString());

      return this.http.get<any>(this.apiURL + '/Sales/GetInSales', {  params })
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/Employee/GetBookMongo')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id): Observable<any> {
    return this.http.get<any>(this.apiURL + '/employees/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<any> {
    return this.http.post<any>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  


  // this.service.SaveInSales(this.txtCustomerEmail, this.txtAge, this.txtSatisfaction, this.txtGender, this.txtCouponUsed
  //   ,this.txtInputPurchaseMethod, this.txtInputSaleDate, this.txtInputStoreLocation

  SaveInSales(txtCustomerEmail:string,txtAge:number,txtSatisfaction:string,txtGender:string,
    txtCouponUsed:string,txtInputPurchaseMethod:string,txtInputSaleDate:Date,
    txtInputStoreLocation:string): Observable<any> {
    let params = new HttpParams();
     params = params.set('CustomerEmail', txtCustomerEmail.toString());
    params = params.set('age', txtAge.toString());
    params = params.set('Satisfaction', txtSatisfaction.toString());
    params = params.set('gender', txtGender.toString());
    params = params.set('CouponUsed', txtCouponUsed.toString());
    params = params.set('PurchaseMethod', txtInputPurchaseMethod.toString());
    params = params.set('SaleDate', txtInputSaleDate.toDateString());
    params = params.set('StoreLocation', txtInputStoreLocation.toString());
    
    // return this.http.post<any>(this.apiURL + '/Sales/SaveInSales', {  params }, this.httpOptions)
    return this.http.get<any>(this.apiURL + '/Sales/SaveInSales', {  params })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API put() method => Update employee
  updateEmployee(id, employee): Observable<any> {
    return this.http.put<any>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id){
    return this.http.delete<any>(this.apiURL + '/employees/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}