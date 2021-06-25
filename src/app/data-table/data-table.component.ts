import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CountryReports } from 'src/countryReports';
import { TableService } from '../table.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ELEMENT_DATA!: CountryReports[];

  displayedColumns: string[] = ['country','cases','tests','deaths','active'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  constructor(private service: TableService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllReports();
  }

  public getAllReports(){
    let response = this.service.fetchUsers();
    response.subscribe(report=>this.dataSource.data=report as CountryReports[])
  }
}
