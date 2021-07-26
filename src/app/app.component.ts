import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carousel';
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  tile = [...Array(14).keys()]
  $ = (selector: any) => {
    return document.querySelector(selector);
  };

  next() {
    let hideText;
    if (this.$(".hide")) {
      hideText = this.$(".hide").innerText;
      this.$(".hide").remove();
    }

    /* Step */

    if (this.$(".prev")) {
      this.$(".prev").classList.add("hide");
      this.$(".prev").classList.remove("prev");
    }

    this.$(".act").classList.add("prev","backgroundSize");
    this.$(".act").classList.remove("act", "center_item","backgroundSizeCenter");
    if (this.$(".start_here")) {
      this.$(".start_here").remove();
    }

    this.$(".next").classList.add("act", "center_item","backgroundSizeCenter");
    this.$(".next").classList.remove("next","backgroundSize");
    const start_here = document.createElement('p');
    start_here.classList.add("start_here")
    start_here.innerHTML = "Start Here >"
    this.$(".act").appendChild(start_here);

    /* New Next */

    this.$(".right-item").classList.remove("right-item");
    const addedEl = document.createElement('li');
    const para = document.createElement('p');
    para.classList.add("box-content");
    para.innerHTML = hideText;
    addedEl.appendChild(para);
    this.$(".list").appendChild(addedEl);
    if(window.screen.availWidth > 1024){
      addedEl.classList.add("next", "right-item", "rel","elemForward","backgroundSize");
    }else{
      addedEl.classList.add("next", "right-item", "rel","backgroundSize");
    }
  }

  prev() {
    let newNextText;
    if(this.$(".right-item")){
      newNextText = this.$(".right-item").innerText;
      this.$(".right-item").remove();
    }
  
    
    this.$(".next").classList.add("right-item");
    this.$(".act").classList.add("next","backgroundSize");
    this.$(".act").classList.remove("act", "center_item","backgroundSizeCenter");
    if (this.$(".start_here")) {
      this.$(".start_here").remove();
    }

    this.$(".prev").classList.add("act", "center_item","backgroundSizeCenter");
    this.$(".prev").classList.remove("prev","backgroundSize");
    const start_here = document.createElement('p');
    start_here.classList.add("start_here")
    start_here.innerHTML = "Start Here >"
    this.$(".act").appendChild(start_here);

    /* New Prev */

    this.$(".hide").classList.add("prev");
    this.$(".hide").classList.remove("hide");

    const addedEl = document.createElement('li');
    const para = document.createElement('p')
    para.classList.add("box-content");
    para.innerHTML = newNextText;
    addedEl.appendChild(para);
    this.$(".list").insertBefore(addedEl, this.$(".list").firstChild);

    if(window.screen.availWidth > 1024){
        addedEl.classList.add("hide", "rel","elemReverse","backgroundSize");
   }
   else{
     addedEl.classList.add("hide", "rel","backgroundSize");
   }

  }

  onSwipe(event: any) {
    console.log("event",event)
    const x =
      Math.abs(
        event.deltaX) > 40 ? (event.deltaX > 0 ? "Right" : "Left") : "";

        if(x == "Right"){
          this.prev();
        }else{
          this.next();
        }
  }



}
