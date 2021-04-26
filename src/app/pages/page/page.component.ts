import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intern } from 'src/app/intern';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  interns: Intern[] = [];

  constructor(private pageService:PagesService,private router:Router) { }

  ngOnInit(): void {
    this.getInterns();

   
    }
    private getInterns(){
      this.pageService.getInterns().subscribe(data=>{
        this.interns=data;
      });
    
  }
  updateIntern(id:number| undefined){
    this.router.navigate(['/page/list/update-intern',id]);
  }
  deleteIntern(id:number|undefined){
    this.pageService.deleteIntern(id).subscribe(data=>{
      console.warn(data);
      this.getInterns();
    })
  }

}
