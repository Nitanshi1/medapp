import { Component, inject, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatPaginatorModule,
     MatSortModule,
      MatTableModule, 
      MatInputModule, 
      MatFormFieldModule, 
      MatButtonModule,
      RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  displayedColumns: string[] = ['id', 'name', 'shortDescription', 'price', 'discount', 'action'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  productService=inject(ProductService)
  constructor() {
 
    this.dataSource = new MatTableDataSource([] as any);
  }
 ngOnInit(){
  this.getServerData();
 }
  
  private getServerData() {
    this.productService.getAllProducts().subscribe((result) => {
      console.log(result);
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(id:string){
    // console.log(id);
    this.productService.deleteProduct(id).subscribe((result:any)=>{
      alert("Product Deleted..");
      this.getServerData();
    });
  }
}
