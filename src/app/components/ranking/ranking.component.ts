import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { Data } from '@angular/router';

export interface player_rank {
  id: number;
  first_name: string;
  last_name: string;
  city: string;
  iripin: string;
  image:string;
  total_score: number;
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  ELEMENT_DATA: player_rank[] = [];

  dataSource2: any;
  loading: boolean = false;
  // expandedElement: player_rank | null;
  dataSource:any=[];
  displayedColumns = ['id', 'first_name', 'last_name', 'city', 'total_score', 'iripin'];
  // dataSource = new MatTableDataSource<player_rank>(this.ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  // MatTableDataSource<player_rank>(): Data;

  constructor(private api: ApiService) {
    this.api.get_player_data().subscribe(data => {
      // console.log(data);
      this.ELEMENT_DATA = <any>data;
      // this.dataSource2 = new MatTableDataSource<player_rank>(data);
      this.dataSource = new MatTableDataSource<player_rank>(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      // ELEMENT_DATA.push(ELEMENT_DATA);
    });
    this.loading = true;
  }

  ngAfterViewInit() {}

  ngOnInit() {}

}
