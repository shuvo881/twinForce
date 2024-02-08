import { LightningElement } from 'lwc';

export default class Temp1FrequentlyAskedQ extends LightningElement {

    handleClick(e)
    {
        e.preventDefault();
        console.log("Hello")
        const acc = this.querySelectorAll("accordion");
        console.log(acc);

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
              this.classList.toggle("active");
              var panel = this.nextElementSibling;
              if (panel.style.display === "block") {
                panel.style.display = "none";
              } else {
                panel.style.display = "block";
              }
            });
          }
    }
}