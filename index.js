var navbarLinkContainer1 = document.getElementById("navbarLinkContainer1");
      if (navbarLinkContainer1) {
        navbarLinkContainer1.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var navbarLinkContainer2 = document.getElementById("navbarLinkContainer2");
      if (navbarLinkContainer2) {
        navbarLinkContainer2.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='pricingComparison']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }



      