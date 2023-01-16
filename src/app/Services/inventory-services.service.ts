import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { SupplierForm } from 'src/app/Models/Supplier';
import { Order } from '../Models/orders';
import { user } from '../Models/user';

@Injectable({
  providedIn: 'root'
})

export class InventoryServicesService {

  // supplier = new SupplierForm();

  s = new Subject();
  baseUrl:string = "http://localhost:3000";
    constructor(private http:HttpClient) { }



    // <--------------------------------- User Services --------------------------------------------->

    getCurrentUser(user:any)
    {
      
    }
  //   Save(user:any){
  //     console.log(user);
  //     return this.http.post<any>(`${this.baseUrl}/Users`, user)
  //   }
  
  //   userGetData():Observable<any[]>
  // {
  //    return this.http.get<any[]>(this.baseUrl+"/Users");
  // }



    //<---------------------- product Servicess ---------------------------------------------------->

    
    AddProduct(data: any): Observable<any> 
    {
      return this.http.post<any>(`${this.baseUrl}/Product`, data)
    }
    GetProduct(): Observable<any> 
    {
      return this.http.get<any>(`${this.baseUrl}/Product`)
    }
    // GetData(id:number)
    // {
    //   this.s.next(id);
    // }
    GetProductById(id:any):Observable<any>
    {
      return this.http.get<any>(`${this.baseUrl}/Product/${id}`)
    }
    UpdateProduct(data: any): Observable<any> 
    {
      return this.http.put(`${this.baseUrl}/product/${data.id}`, data)
    }
    DeleteProduct(id: number): Observable<any>{
      return this.http.delete(`${this.baseUrl}/product/${id}`)
  }
  


// <---------------------------- Supplier Servicess ------------------------------------------------>




  supplierId = new Subject(); //Subject gives upcoming value
  // setSupplierId(id:any){
  //   console.log(id);
  //   this.supplierId.next(id); //data stored to Observable
  // }


  AddSupplier(supplier: any): Observable<any> 
  {
      return this.http.post<any>(this.baseUrl+"/Supplier",supplier);
  }

  GetSupplier(): Observable<any> 
  {
    return this.http.get<any>(this.baseUrl+"/Supplier");
  }

  GetSupplierById(id:any):Observable<any>
  {
    return this.http.get<any>(`${this.baseUrl}/Supplier/${id}`)
  }

  EditSupplier(data: any): Observable<any> 
  {
    return this.http.put(`${this.baseUrl}/Supplier/${data.id}`, data)
  }

  DeleteSupplier(id:number): Observable<any>
  {
     return this.http.delete(this.baseUrl+"/Supplier/"+id);
  }





  // <-----------------------------order Services------------------------------------------------>



 
  saveorderDetails(obj:any){
    console.log("save");
    return this.http.post<any>(this.baseUrl+"/OrderDetails",obj);
  }
  
  orderGetData(): Observable<any> 
  {
    return this.http.get<any>(`${this.baseUrl}/OrderDetails`)
  }
  saveOrdersDetails(data:any):Observable<Order>{
    return this.http.post<Order>(this.baseUrl+"/OrderDetails",data);
  }
  updateOrderDetails(id:string,data:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+"/OrderDetails/"+id,data);
  }
  // orderGetData():Observable<any[]>
  // {
  //    return this.http.get<any[]>(this.baseUrl+"/OrderDetails");
  // }

 deleteorderData(orderId:number)
 {
     return this.http.delete(this.baseUrl+"/deletedata/"+ orderId);
 }
 
}