import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intern } from '../intern';
import { PagesService } from '../pages/pages.service';

@Component({
  selector: 'app-update-intern',
  templateUrl: './update-intern.component.html',
  styleUrls: ['./update-intern.component.css']
})
export class UpdateInternComponent implements OnInit {
  intern: Intern=new Intern();
  id: number | undefined;
  constructor(private internservice:PagesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'] 
    this.internservice.getInternById(this.id).subscribe(data=>
      {
        this.intern=data;

      },
        error=>console.log(error));
  }
  onSubmit(){
    this.internservice.updateIntern(this.id,this.intern).subscribe(data=>{
      this.goToIntern();
    },
    error=>console.log(error));
  }
  goToIntern(){
  this.router.navigate(['/page/list']);
}

}
