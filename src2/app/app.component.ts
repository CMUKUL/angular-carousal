import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carousel';
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  direction = "";
  $ = (selector: any) => {
    return document.querySelector(selector);
  };



  next() {
    let hideText;
    if (this.$(".hide")) {
      hideText = this.$(".hide").innerText
      this.$(".hide").remove();
    }

    /* Step */

    if (this.$(".prev")) {
      this.$(".prev").classList.add("hide");
      this.$(".prev").classList.remove("prev");
    }

    this.$(".act").classList.add("prev");
    this.$(".act").classList.remove("act", "center_item");
    if (this.$(".start_here")) {
      this.$(".start_here").remove();
    }

    this.$(".next").classList.add("act", "center_item");
    this.$(".next").classList.remove("next");
    const start_here = document.createElement('p');
    start_here.classList.add("start_here")
    start_here.innerHTML = "Start Here >"
    this.$(".act").appendChild(start_here);

    /* New Next */

    this.$(".right-item").classList.remove("right-item");

    const addedEl = document.createElement('li');
    const para = document.createElement('p')
    para.classList.add("box-content");
    para.innerHTML = hideText;
    addedEl.appendChild(para)
    setTimeout(() => {
      this.$(".list").appendChild(addedEl);
      addedEl.classList.add("next", "right-item", "rel", "leftshifting");
    }, 450)

  }

  prev() {
    let newNextText;
    newNextText = this.$(".right-item").innerText;
    this.$(".right-item").remove();


    /* Step */

    this.$(".next").classList.add("right-item");

    this.$(".act").classList.add("next");
    this.$(".act").classList.remove("act", "center_item");
    if (this.$(".start_here")) {
      this.$(".start_here").remove();
    }

    this.$(".prev").classList.add("act", "center_item");
    this.$(".prev").classList.remove("prev");
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
    setTimeout(() => {
      this.$(".list").insertBefore(addedEl, this.$(".list").firstChild);
      addedEl.classList.add("hide", "rel");
    }, 450)

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
