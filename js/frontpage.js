const topElement = document.querySelector(".top"); // 選擇 .top 元素
        const img = document.querySelector(".topimg");
        let scrollDistance = 0;
        let requestId = null;
    
        function updateTopClipPath() {
            // 設置 clip-path 動畫效果
            const clipPathValue = `polygon(0 0, 100% 0%, 100% ${(scrollDistance <= 600) ? 100 - ((scrollDistance / 600) * 60) : 75}%, 0 100%)`;
            topElement.style.clipPath = clipPathValue;
    
            // 設置圖片縮放效果
            const scaleValue = 1 + ((scrollDistance / 600) * 1);
            img.style.transform = `scale(${scaleValue})`;
    
            // 可選：設置透明度效果
            const opacityValue = (scrollDistance / 600);
        }
    
        function scrollHandler(event) {
            // 滾動事件處理
            if (event.deltaY < 0) {
                scrollDistance = Math.max(0, scrollDistance + event.deltaY);
            } else {
                scrollDistance = Math.min(600, scrollDistance + event.deltaY);
            }
    
            // 優化：避免重複執行動畫
            if (!requestId) {
                requestId = window.requestAnimationFrame(() => {
                    updateTopClipPath();
                    requestId = null;
                });
            }
        }
        // 添加滾輪事件監聽器
        window.addEventListener('wheel', scrollHandler);

    function toggleSidebar(){
            var sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('active');
        }


        let slideIndex = 0; // 目前顯示的第一組圖片的索引

        function plusSlides(n) {
            const slidesContainer = document.querySelector('.slides-container');
            const slideWidth = document.querySelector('.slide').clientWidth; // 單張圖片寬度
            const totalSlides = document.querySelectorAll('.slide').length; // 總圖片數
            const visibleSlides = 4; // 每次顯示的圖片數
            const maxIndex = totalSlides - visibleSlides; // 最大索引

            slideIndex += n;

            // 確保索引在範圍內
            if (slideIndex < 0) {
                slideIndex = maxIndex;
            } else if (slideIndex > maxIndex) {
                slideIndex = 0;
            }

            slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        }

            document.addEventListener('DOMContentLoaded', () => {
                const slideWidth = document.querySelector('.slide').clientWidth;
                const slidesContainer = document.querySelector('.slides-container');
                slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
            });
