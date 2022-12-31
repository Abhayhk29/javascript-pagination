(function(){
    
    const jsonData = [
        {
            id:1,
            title: "Data 1"
        },
        {
            id:2,
            title: "Data 2"
        },
        {
            id:3,
            title: "Data 3"
        },
        {
            id:4,
            title: "Data 4"
        },
        {
            id:5,
            title: "Data 5"
        },
        {
            id:6,
            title: "Data 6"
        },
        {
            id:7,
            title: "Data 7"
        },
        {
            id:8,
            title: "Data 8"
        },
        {
            id:9,
            title: "Data 9"
        },
        {
            id:10,
            title: "Data 10"
        },
        {
            id:11,
            title: "Data 11"
        },
        {
            id:12,
            title: "Data 12"
        },
        {
            id:13,
            title: "Data 13"
        },
        {
            id:14,
            title: "Data 14"
        },
        {
            id:15,
            title: "Data 15"
        },
        {
            id:16,
            title: "Data 16"
        },
        {
            id:17,
            title: "Data 17"
        },
        {
            id:18,
            title: "Data 18"
        },
        {
            id:19,
            title: "Data 19"
        },
        {
            id:20,
            title: "Data 20"
        },
        {
            id:21,
            title: "Data 21"
        },
        {
            id:22,
            title: "Data 22"
        },
        {
            id:23,
            title: "Data 23"
        },
        {
            id:24,
            title: "Data 24"
        },
        {
            id:25,
            title: "Data 25"
        },
        {
            id:26,
            title: "Data 26"
        },
        {
            id:27,
            title: "Data 27"
        },
        {
            id:28,
            title: "Data 28"
        },{
            id:29,
            title: "Data 29"
        },
        {
            id:30,
            title: "Data 30"
        },
        {
            id:31,
            title: "Data 31"
        },
        {
            id:32,
            title: "Data 32"
        },
        {
            id:33,
            title: "Data 33"
        },
        {
            id:34,
            title: "Data 34"
        },
        {
            id:35,
            title: "Data 35"
        },
        {
            id:36,
            title: "Data 36"
        },
        {
            id:37,
            title: "Data 37"
        },
        {
            id:38,
            title: "Data 38"
        },
        {
            id:39,
            title: "Data 39"
        },
        {
            id:40,
            title: "Data 40"
        }
    ]

    let currentPageNumber = 1;
    const itemsPerPage = 5;
    const totalItems = jsonData.length - 1;
    const totalPages = Math.floor(totalItems / itemsPerPage);

    const prevPage = document.getElementById('prev_page');
    const nextPage = document.getElementById('next_page');
    const clickPage = document.getElementById('page_number');

    prevPage.addEventListener('click',prevPa);
    nextPage.addEventListener('click', nextPa);
    clickPage.addEventListener('click', clickOnPageNumber);

    function clickOnPageNumber(e){
        currentPageNumber = +e.target.innerHTML;
        initPage(+e.target.innerHTML);
    }

    function prevPa(){
        if(currentPageNumber > 1)
            initPage(--currentPageNumber);
    }

    function nextPa(){
        if(currentPageNumber < totalPages)
            initPage(++currentPageNumber);
    }

    function initPage(pageNumber){
        loadData(pageNumber);
        getAllPages(pageNumber);
        setButtonOpacity(pageNumber)

    }

    function loadData(curPage){
        let dataBlock = document.getElementById('data-block');
        
        if(curPage < 1){
            curPage = 1;
        }else if(curPage > totalPages) {
            curPage = totalPages;
        }

        dataBlock.innerHTML = '';
        for (let i = (curPage - 1) * itemsPerPage; i < (itemsPerPage * curPage); i++) {
            dataBlock.innerHTML += `<div class='data-element'>${jsonData[i].title}</div>`; 
        }
    }

    function getAllPages(pageNumber){
        let pageContainer = document.getElementById('page_number');
        pageContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            let style = 'style="opacity:0.5"'
            if(i === pageNumber){
                style = 'style="opacity:1"'
            }
            pageContainer.innerHTML += `<div class='page-number-row opacity' ${style} id='page-number-row-${i}'>${i}</div>`
        }
    }

    function setButtonOpacity(pageNumber){
        if(pageNumber === 1){
            prevPage.style.opacity = 0.5;
            prevPage.style.cursor = 'default';
        }else{
            prevPage.style.opacity = 1;
            prevPage.style.cursor = 'cursor';
        }

        if(pageNumber === totalPages){
            nextPage.style.opacity = 0.5;
            nextPage.style.cursor = 'default';
        }else{
            nextPage.style.opacity = 1;
            nextPage.style.cursor = 'cursor';
        }
        
    }

    initPage(currentPageNumber);

})()