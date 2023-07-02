import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {
  isActive: string = 'active';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  // const section = document.querySelector("section"),
  //       overlay = document.querySelector(".overlay"),
  //       showBtn = document.querySelector(".show-modal"),
  //       closeBtn = document.querySelector(".close-btn");

  //     showBtn.addEventListener("click", () => section.classList.add("active"));

  //     overlay.addEventListener("click", () =>
  //       section.classList.remove("active")
  //     );

  //     closeBtn.addEventListener("click", () =>
  //       section.classList.remove("active")
  //     );
  closePopup() {
    console.log('bye');
    // alert('bye');
    this.isActive = '';
    this.router.navigate(['/menu']);
  }
  showPopup(event: any) {
    // alert('hello');
    this.isActive = '';
    console.log(event);
  }
}
