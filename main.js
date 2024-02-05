
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tabItems = $$('.tabs .tab-item');
  const tapPanes = $$('.tab-content .tab-pane');

  const tabActive = $('.tab-item.active');
  const line = $('.line');

  moveLine(tabActive);

  tabItems.forEach((tabItem,index) => {
      const pane = tapPanes[index];

      tabItem.onclick = function () {

        $('.tab-item.active').classList.remove('active');
        this.classList.add('active');
        
        moveLine(this);

        $('.tab-pane.active').classList.remove('active');
        pane.classList.add('active');
      }  
  });


  function moveLine(item) {
    line.style.left = item.offsetLeft + 'px';
    line.style.width = item.offsetWidth + 'px';
  }

