import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intern } from '../intern';
import { PagesService } from '../pages/pages.service';

@Component({
  selector: 'app-create-intern',
  templateUrl: './create-intern.component.html',
  styleUrls: ['./create-intern.component.css']
})
export class CreateInternComponent implements OnInit {

  intern: Intern=new Intern();

  constructor(private internservice:PagesService,private router:Router) { }

  ngOnInit(): void {
  }
saveIntern(){
  this.internservice.createInterns(this.intern).subscribe(data=>{
    console.log(data);
    this.goToIntern();
  },
  error=>console.log(error)
    );
}
goToIntern(){
  this.router.navigate(['/page/list']);
}
onSubmit(){
  console.log(this.intern)
  this.saveIntern();
}
}
