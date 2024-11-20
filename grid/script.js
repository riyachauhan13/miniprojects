let gridContainer = document.getElementById("grid-container");
      let boxes = document.querySelectorAll(".box");

      function columnTwo() {
        gridContainer.style.cssText =
          "grid-template-columns:repeat(2,calc(300px - 3rem));grid-template-rows:repeat(6,calc(180px - 3rem))";


        boxes.forEach((box) => {
          box.style.backgroundColor = "cadetblue";
        });

      }

      function columnThree() {
        gridContainer.style.cssText =
          "grid-template-columns:repeat(3,calc(200px - 3rem));grid-template-rows:repeat(4,calc(180px - 3rem))";
        boxes.forEach((box) => {
          box.style.backgroundColor = "cornflowerblue";
        });

        
      }

      function columnFour() {
        console.log("click");
        gridContainer.style.cssText =
          "grid-template-columns:repeat(4,calc(150px - 2rem));grid-template-rows:repeat(3,calc(180px - 2rem)); ";

        boxes.forEach((box) => {
          box.style.backgroundColor = "mediumturquoise";
        });
      }